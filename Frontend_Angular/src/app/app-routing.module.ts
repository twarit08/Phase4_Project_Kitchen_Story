import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { AllitemsComponent } from './Components/allitems/allitems.component';
import { AdditemComponent } from './Components/additem/additem.component';
import { AuthGuard } from './Services/auth.guard';
import { UpdateItemComponent } from './Components/update-item/update-item.component';
import { ProductSearchComponent } from './Components/product-search/product-search.component';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';
import { OrderConfirmComponent } from './Components/order-confirm/order-confirm.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'change-password', component: ChangepasswordComponent, pathMatch: 'full' },
  { path: 'all-items', component: AllitemsComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'add-item', component: AdditemComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'update-item/:name', component: UpdateItemComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'product-search/:name', component: ProductSearchComponent, pathMatch: 'full' },
  { path: 'place-order/:name', component: PlaceOrderComponent, pathMatch: 'full' },
  { path: 'order-confirm/:id', component: OrderConfirmComponent, pathMatch: 'full' },
  { path: 'all-orders', component: AllOrdersComponent, pathMatch: 'full', canActivate: [AuthGuard] }
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
