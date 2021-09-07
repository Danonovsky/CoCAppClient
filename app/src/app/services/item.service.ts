import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemRequest } from '../models/item/itemRequest';
import { ItemResponse } from '../models/item/itemResponse';
import { ItemType } from '../models/item/itemType';
import { ItemTypeAttribute } from '../models/item/itemTypeAttribute';
import { ItemTypeAttributeRequest } from '../models/item/itemTypeAttributeRequest';
import { ItemTypeRequest } from '../models/item/itemTypeRequest';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private url = "http://localhost:5000/admin/item/";

  constructor(
    private http: HttpClient
  ) { }

  getItemTypes(): Observable<HttpResponse<ItemType[]>> {
    return this.http.get<ItemType[]>(this.url+"itemType", { observe: 'response' });
  }

  getItemType(id: String): Observable<HttpResponse<ItemType>> {
    return this.http.get<ItemType>(this.url+"itemType/"+id, { observe: 'response' });
  }

  addItemType(model: ItemTypeRequest): Observable<HttpResponse<Boolean>> {
    return this.http.post<Boolean>(this.url+"itemType", model, { observe: 'response' });
  }

  deleteItemType(id: String): Observable<HttpResponse<Boolean>> {
    return this.http.delete<Boolean>(this.url+"itemType/"+id, { observe: 'response' });
  }

  getItemTypeAttributes(id: String): Observable<HttpResponse<ItemTypeAttribute[]>> {
    return this.http.get<ItemTypeAttribute[]>(this.url+"itemTypeAttribute/all/"+id, { observe: 'response' });
  }

  addItemTypeAttribute(model: ItemTypeAttributeRequest): Observable<HttpResponse<Boolean>> {
    return this.http.post<Boolean>(this.url+"itemTypeAttribute", model, { observe: 'response' });
  }

  deleteItemTypeAttribute(id: String): Observable<HttpResponse<Boolean>> {
    return this.http.delete<Boolean>(this.url+"itemTypeAttribute/"+id, { observe: 'response' });
  }

  getItem(id: String): Observable<HttpResponse<ItemResponse>> {
    return this.http.get<ItemResponse>(this.url+"item/"+id, { observe: 'response' });
  }

  getItems(): Observable<HttpResponse<ItemResponse[]>> {
    return this.http.get<ItemResponse[]>(this.url+"item", { observe: 'response' });
  }

  addItem(model: ItemRequest): Observable<HttpResponse<Boolean>> {
    return this.http.post<Boolean>(this.url+"item", model, { observe: 'response' });
  }

  deleteItem(id: String): Observable<HttpResponse<Boolean>> {
    return this.http.delete<Boolean>(this.url+"item/"+id, { observe: 'response'});
  }
}
