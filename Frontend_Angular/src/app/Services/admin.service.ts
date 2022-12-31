import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Components/allitems/Items';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = 'http://localhost:9595'

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/getItems`)
  }

  addItem(item: Item): Observable<Object> {
    return this.http.post<Object>(`${this.baseUrl}/saveItem`, item)
  }

  getItemByName(name: string): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/getItem/${name}`)
  }

  updateItem(name: string, item: Item): Observable<Object> {
    return this.http.put<Object>(`${this.baseUrl}/updateItem/${name}`, item)
  }

  deleteItem(name: string): Observable<Object> {
    return this.http.delete<Object>(`${this.baseUrl}/deleteItem/${name}`)
  }

}
