import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterApiResponse } from '../models/character.model';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<CharacterApiResponse> {
    return this.http.get<CharacterApiResponse>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('error fetching characters:', error);
        return throwError(() => new Error('error fetching characters'))
      })
    )
  }
}
