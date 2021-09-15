import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterRequest } from '../models/character/characterRequest';
import { CharacterResponse } from '../models/character/characterResponse';
import { LocationRequest } from '../models/location/locationRequest';
import { LocationResponse } from '../models/location/locationResponse';
import { NoteRequest } from '../models/note/noteRequest';
import { NoteResponse } from '../models/note/noteResponse';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private url = "http://localhost:5000/management/";

  constructor(
    private http: HttpClient
  ) { }

  addCharacter(request: CharacterRequest): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(this.url+"character", request, { observe: 'response' });
  }

  getAllCharacters(id: string): Observable<HttpResponse<CharacterResponse[]>> {
    return this.http.get<CharacterResponse[]>(this.url+"character/all/"+id, { observe: 'response' });
  }

  deleteCharacter(id: string): Observable<HttpResponse<boolean>> {
    return this.http.delete<boolean>(this.url+"character/"+id, { observe: 'response' });
  }

  addLocation(request: LocationRequest): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(this.url+"location", request, { observe: 'response' });
  }

  getAllLocations(id: string): Observable<HttpResponse<LocationResponse[]>> {
    return this.http.get<LocationResponse[]>(this.url+"location/all/"+id, { observe: 'response' });
  }

  deleteLocation(id: string): Observable<HttpResponse<boolean>> {
    return this.http.delete<boolean>(this.url+"location/"+id, { observe: 'response' });
  }

  addNoteToLocation(request: NoteRequest): Observable<HttpResponse<boolean>> {
    return this.http.post<boolean>(this.url+"location/note", request, { observe: 'response' });
  }

  getAllNotesFromLocation(id: string): Observable<HttpResponse<NoteResponse[]>> {
    return this.http.get<NoteResponse[]>(this.url+"location/note/all/"+id, { observe: 'response' });
  }

  deleteNoteFromLocation(id: string): Observable<HttpResponse<boolean>> {
    return this.http.delete<boolean>(this.url+"location/note/"+id, { observe: 'response' });
  }
}
