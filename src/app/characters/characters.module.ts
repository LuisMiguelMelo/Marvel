import { NgModule } from "@angular/core";

import { AppMaterialModule } from "../app-material.module";
import { ComicsModule } from "../comics/comics.module";
import { SharedModule } from "../shared/shared.module";
import { CharacterCardComponent } from "./character-card/character-card.component";
import { CharacterListComponent } from "./character-list/character-list.component";
import { FilterPipe } from "./character-list/filter.pipe";

@NgModule({
  imports: [AppMaterialModule, ComicsModule, SharedModule],
  declarations: [CharacterCardComponent, CharacterListComponent, FilterPipe],
  exports: [FilterPipe],
})
export class CharacterModule {}
