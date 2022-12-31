import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Item } from '../allitems/Items';
import { AdminService } from 'src/app/Services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  name!: string;
  item: Item = new Item();
  constructor(private adminService: AdminService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.adminService.getItemByName(this.name).subscribe({
      next: (data) => {
        this.item = data;
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  onSubmit() {
    this.adminService.updateItem(this.name, this.item).subscribe({
      next: (data) => {
        console.log(data);
        alert("Item updated successfully!");
      }, error: (error) => {
        console.log(error);
      }
    })
  }

}
