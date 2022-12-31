import { Component } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Item } from './Items';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allitems',
  templateUrl: './allitems.component.html',
  styleUrls: ['./allitems.component.css']
})
export class AllitemsComponent implements OnInit {

  allItems!: Item[];
  constructor(private adminService: AdminService, private router: Router) {
  }
  ngOnInit(): void {
    this.getItemsList()
  }

  getItemsList() {
    this.adminService.getItems().subscribe({
      next: (items) => {
        this.allItems = items;
      }, error: (errors) => {
        console.log(errors);
        alert("No items found!");
      }
    })
  }
  updateItem(name: string) {
    let url: string = "/update-item/" + name;
    this.router.navigateByUrl(url);
  }

  deleteItem(name: string) {
    this.adminService.deleteItem(name).subscribe({
      next: (data) => {
        this.getItemsList();
      }, error: (error) => { console.log(error) }
    })

  }


}
