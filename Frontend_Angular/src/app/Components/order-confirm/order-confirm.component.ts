import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Order } from '../place-order/order';
import { Item } from '../allitems/Items';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  id!: number;
  getOrder: Order = new Order();
  product: Item = new Item();
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getOrder(this.id).subscribe({
      next: (order) => {
        this.getOrder = order
        this.product = this.getOrder.product
        console.log(this.getOrder)
      }, error: (error) => {
        console.log(error)
      }
    })
  }






}
