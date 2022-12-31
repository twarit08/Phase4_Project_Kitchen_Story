import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { Item } from '../allitems/Items';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  name!: string;
  item!: Item[];

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.showItems()
  }

  showItems() {
    this.userService.searchItems(this.name).subscribe({
      next: (items: Item[]) => {
        this.item = items;
        console.log(this.item);
      }, error: (error: any) => {
        console.log(error);
        alert('No products found!');
      }
    })
  }

  selectItem(item: string) {
    let url = "/place-order/" + item;
    this.router.navigateByUrl(url);
  }

}
