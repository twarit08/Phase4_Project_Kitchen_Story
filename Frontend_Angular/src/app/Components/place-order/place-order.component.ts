import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';
import { OnInit } from '@angular/core';
import { Item } from '../allitems/Items';
import { UserService } from 'src/app/Services/user.service';
import { Order } from './order';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  item!: string;
  product: Item = new Item();
  order: Order = new Order();
  amount!: number;
  public payment = false;
  constructor(private userService: UserService, private adminService: AdminService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.item = this.route.snapshot.params['name'];
    this.adminService.getItemByName(this.item).subscribe({
      next: (item) => {
        this.product = item;
        console.log(this.product);
      }, error: (error) => {
        console.log(error);
      }
    })

  }
  onPay(): boolean {
    if (this.order.payment == "COD") {
      this.payment = true;
      return this.payment;
    } else {
      return this.payment = false;
    }
  }

  onSubmit(): void {

    if (this.order.name == null || this.order.address == null || this.order.contact == null || this.order.state == null) {
      alert("Please enter the details!");
    } else {
      this.order.id = new Date().getTime().toString();
      this.order.product = this.product;
      this.userService.orderProduct(this.order).subscribe({
        next: (product) => {
          let url = "/order-confirm/" + this.order.id;
          this.router.navigateByUrl(url).then(() => { location.reload() });
        }, error: (error) => {
          console.log(error);
        }
      })
    }
  }

}
