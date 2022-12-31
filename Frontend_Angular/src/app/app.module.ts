import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { AllitemsComponent } from './Components/allitems/allitems.component';
import { AdditemComponent } from './Components/additem/additem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Services/auth.interceptor';
import { LoginService } from './Services/login.service';
import { AuthGuard } from './Services/auth.guard';
import { UpdateItemComponent } from './Components/update-item/update-item.component';
import { ProductSearchComponent } from './Components/product-search/product-search.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { OrderConfirmComponent } from './Components/order-confirm/order-confirm.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ChangepasswordComponent,
    AllitemsComponent,
    AdditemComponent,
    UpdateItemComponent,
    ProductSearchComponent,
    PlaceOrderComponent,
    OrderConfirmComponent,
    AllOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, AuthGuard, [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
