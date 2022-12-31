import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { OnInit } from '@angular/core';
import { Order } from '../place-order/order';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {

  orders!: Order[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }

  getAllOrders() {
    this.userService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data
      }, error: (error) => {
        alert('No orders found!')
        console.log(error);
      }
    })
  }

  deleteOrder(id: string) {
    this.userService.deleteOrder(id).subscribe({
      next: (data) => {
        console.log('Successfully deleted');
        this.getAllOrders();
      }, error: (error) => {
        console.log(error);
      }
    })
  }

}
