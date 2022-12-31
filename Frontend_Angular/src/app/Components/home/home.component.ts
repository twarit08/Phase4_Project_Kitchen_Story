import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  product: any;
  constructor(private router: Router) { }

  search(name: string) {
    if (name == null) {
      alert('Please enter a product name!');
    } else {
      let url: string = "/product-search/" + name;
      this.router.navigateByUrl(url);
    }

  }

}
