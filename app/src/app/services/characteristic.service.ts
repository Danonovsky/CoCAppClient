import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultCharacteristicRequest } from '../models/characteristic/defaultCharacteristicRequest';
import { DefaultCharacteristicResponse } from '../models/characteristic/defaultCharacteristicResponse';

@Injectable({
  providedIn: 'root'
})
export class CharacteristicService {
  private url = "http://localhost:5000/admin/characteristic/";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<HttpResponse<DefaultCharacteristicResponse[]>> {
    return this.http.get<DefaultCharacteristicResponse[]>(this.url, { observe: 'response' });
  }

  add(model: DefaultCharacteristicRequest): Observable<HttpResponse<Boolean>> {
    return this.http.post<Boolean>(this.url, model, { observe: 'response' });
  }

  delete(id: String): Observable<HttpResponse<Boolean>> {
    return this.http.delete<Boolean>(this.url+id, { observe: 'response' });
  }

  get(id: String): Observable<HttpResponse<DefaultCharacteristicResponse>> {
    return this.http.get<DefaultCharacteristicResponse>(this.url+id, { observe: 'response' });
  }

  update(id: String, model: DefaultCharacteristicRequest): Observable<HttpResponse<Boolean>> {
    return this.http.put<Boolean>(this.url+id, model, { observe: 'response' });
  }
}
