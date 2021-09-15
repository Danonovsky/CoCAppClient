import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GamesComponent } from './components/game/games/games.component';
import { AuthGuard } from './guards/auth-guard.service';
import { RefuseLoggedInGuard } from './guards/refuse-logged-in.guard';
import { CreateGameComponent } from './components/game/create/create-game.component';
import { GameComponent } from './components/game/game/game.component';
import { ViewComponent } from './components/game/view/view.component';
import { JoinedGamesComponent } from './components/game/joined-games/joined-games.component';
import { UserGamesComponent } from './components/game/user-games/user-games.component';
import { ListComponent } from './components/admin/characteristic/list-characteristic/list.component';
import { AddCharacteristicComponent } from './components/admin/characteristic/add-characteristic/add-characteristic.component';
import { EditCharacteristicComponent } from './components/admin/characteristic/edit-characteristic/edit-characteristic.component';
import { ListSkillComponent } from './components/admin/skill/list-skill/list-skill.component';
import { AddSkillComponent } from './components/admin/skill/add-skill/add-skill.component';
import { EditSkillComponent } from './components/admin/skill/edit-skill/edit-skill.component';
import { ItemTypeListComponent } from './components/admin/itemType/item-type-list/item-type-list.component';
import { ItemTypeAddComponent } from './components/admin/itemType/item-type-add/item-type-add.component';
import { ItemListComponent } from './components/admin/item/item-list/item-list.component';
import { ItemAddComponent } from './components/admin/item/item-add/item-add.component';
import { ItemTypeEditComponent } from './components/admin/itemType/item-type-edit/item-type-edit.component';
import { ItemDetailsComponent } from './components/admin/item/item-details/item-details.component';
import { AddCharacterComponent } from './components/management/character/add-character/add-character.component';
import { HomeComponent } from './components/management/home/home.component';
import { CharacterManagementComponent } from './components/management/character/character-management/character-management.component';
import { NavComponent } from './components/management/nav/nav.component';
import { LocationListComponent } from './components/management/location/location-list/location-list.component';
import { LocationAddComponent } from './components/management/location/location-add/location-add.component';
import { NotesComponent } from './components/management/location/notes/notes.component';
import { ItemsComponent } from './components/management/location/items/items.component';
import { NotesListComponent } from './components/management/notes/notes-list/notes-list.component';

export function tokenGetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    GamesComponent,
    CreateGameComponent,
    GameComponent,
    ViewComponent,
    JoinedGamesComponent,
    UserGamesComponent,
    ListComponent,
    AddCharacteristicComponent,
    EditCharacteristicComponent,
    ListSkillComponent,
    AddSkillComponent,
    EditSkillComponent,
    ItemTypeListComponent,
    ItemTypeAddComponent,
    ItemListComponent,
    ItemAddComponent,
    ItemTypeEditComponent,
    ItemDetailsComponent,
    AddCharacterComponent,
    HomeComponent,
    CharacterManagementComponent,
    NavComponent,
    LocationListComponent,
    LocationAddComponent,
    NotesComponent,
    ItemsComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"]
      }
    }),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [AuthGuard, RefuseLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
