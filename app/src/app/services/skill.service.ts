import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DefaultSkillRequest } from '../models/skill/defaultSkillRequest';
import { DefaultSkillResponse } from '../models/skill/defaultSkillResponse';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private url = "http://localhost:5000/admin/skill/";

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<HttpResponse<DefaultSkillResponse[]>> {
    return this.http.get<DefaultSkillResponse[]>(this.url, { observe: 'response' });
  }

  add(model: DefaultSkillRequest): Observable<HttpResponse<Boolean>> {
    return this.http.post<Boolean>(this.url, model, { observe: 'response' });
  }

  delete(id: String): Observable<HttpResponse<Boolean>> {
    return this.http.delete<Boolean>(this.url+id, { observe: 'response' });
  }

  get(id: String): Observable<HttpResponse<DefaultSkillResponse>> {
    return this.http.get<DefaultSkillResponse>(this.url+id, { observe: 'response' });
  }

  update(id: String, model: DefaultSkillRequest): Observable<HttpResponse<Boolean>> {
    return this.http.put<Boolean>(this.url+id, model, { observe: 'response' });
  }
}
