import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { Observable, Subject, of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

import { Character } from "../../core/character.model";
import { CharacterService } from "../characters.service";

import { FilterPipe } from "./filter.pipe";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
  styleUrls: ["./character-list.component.css"],
  providers: [FilterPipe],
})
export class CharacterListComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private appFilter: FilterPipe
  ) {}

  characters: Observable<Character[]>;
  isVisible = false;
  selectedCharacter: Character;
  showProgress = false;
  searchText = "";

  @ViewChild(MatDrawer) private drawer: MatDrawer;

  getAllCharacters() {
    this.characters = this.characterService.getAllCharacters();
  }

  ngOnInit() {
    this.getAllCharacters();
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
    this.drawer.toggle();
  }

  // trackByCharacters(index: number, character: Character) {
  //   return character.id;
  // }
}
