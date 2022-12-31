import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Item } from '../allitems/Items';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {
  item: Item = new Item();

  constructor(private adminService: AdminService) { }

  saveItem() {
    this.adminService.addItem(this.item).subscribe({
      next: (item) => {
        console.log("Added item");
      }, error: (errors) => {
        console.log(errors);
      }
    })
  }
  onSubmit() {
    if (this.item.name == null || this.item.brand == null || this.item.origin == null || this.item.price == null || this.item.quantity == null || this.item.pid == null || this.item.category == null || this.item.ingredient == null) {
      alert("Please Enter Complete Details!")
    } else {
      console.log(this.item);
      this.saveItem()
      alert("Item Added Successfully!")
    }
  }

}
