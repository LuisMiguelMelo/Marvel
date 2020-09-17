import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { Character } from "../core/character.model";

@Injectable({
  providedIn: "root",
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(term: string): Observable<Character[]> {
    const options = new HttpParams().set("nameStartsWith", term);
    return this.http
      .get<Character[]>(`${environment.apiUrl}characters`, { params: options })
      .pipe(map((response: any) => response.data.results));
  }

  getAllCharacters(): Observable<any> {
    return this.http
      .get<any>(`${environment.apiUrl}characters`)
      .pipe(map((response: any) => response.data.results));
  }
}
