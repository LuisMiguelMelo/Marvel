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

  getAllCharacters(limit, offset): Observable<Character[]> {
    return this.http
      .get<Character[]>(`${environment.apiUrl}characters?limit=` + limit + `&offset=` + offset)
      .pipe(map((response: any) => response.data.results));
  }
}
