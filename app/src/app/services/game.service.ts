import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameCreateRequest } from '../models/game/gameCreateRequest';
import { GameResponse } from '../models/game/gameResponse';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private url = "http://localhost:5000/game/";

  constructor(
    private http: HttpClient
  ) { }

  getPossibleGames(): Observable<HttpResponse<GameResponse[]>> {
    var result = this.http.get<GameResponse[]>(this.url+"getPossible", { observe: 'response'});
    return result;
  }

  create(model: GameCreateRequest): Observable<HttpResponse<Boolean>> {
    var result = this.http.post<Boolean>(this.url+"create", model, { observe: 'response'});
    return result;
  }
}
