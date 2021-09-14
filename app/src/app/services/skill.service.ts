import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RollRequest } from '../models/roll/rollRequest';
import { RollResponse } from '../models/roll/rollResponse';
import { DefaultSkillRequest } from '../models/skill/defaultSkillRequest';
import { DefaultSkillResponse } from '../models/skill/defaultSkillResponse';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private url = "http://localhost:5000/admin/skill/";
  private urlRoll = "http://localhost:5000/roll/";

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

  getRoll(roll: RollRequest): Observable<HttpResponse<RollResponse>> {
    return this.http.post<RollResponse>(this.urlRoll, roll, { observe: 'response'});
  }

  getRolls(rolls: RollRequest[]): Observable<HttpResponse<RollResponse[]>> {
    return this.http.post<RollResponse[]>(this.urlRoll+"many", rolls, { observe: 'response'});
  }
}
