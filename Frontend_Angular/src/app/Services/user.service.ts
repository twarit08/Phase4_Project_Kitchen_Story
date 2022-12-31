import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Components/allitems/Items';
import { Order } from '../Components/place-order/order';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:9595'

  constructor(private http: HttpClient) { }

  searchItems(name: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/getProduct/${name}`)
  }
  orderProduct(order: Order): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}/order`, order)
  }
  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/getOrder/${id}`)
  }
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/getOrders`)
  }
  deleteOrder(id: string): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/delete/${id}`)
  }
}
