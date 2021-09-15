import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { GamesComponent } from './components/game/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RefuseLoggedInGuard } from './guards/refuse-logged-in.guard';
import { CreateGameComponent } from './components/game/create/create-game.component';
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
import { HomeComponent } from './components/management/home/home.component';
import { CharacterManagementComponent } from './components/management/character/character-management/character-management.component';
import { LocationListComponent } from './components/management/location/location-list/location-list.component';
import { NotesListComponent } from './components/management/notes/notes-list/notes-list.component';
import { PlayersListComponent } from './components/management/players/players-list/players-list.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [RefuseLoggedInGuard] },
  { path: "sign-up", component: SignUpComponent, canActivate: [RefuseLoggedInGuard] },
  { path: "games", component: GamesComponent, canActivate: [AuthGuard] },
  { path: "joined-games", component: JoinedGamesComponent, canActivate: [AuthGuard] },
  { path: "my-games", component: UserGamesComponent, canActivate: [AuthGuard] },
  { path: "games/create", component: CreateGameComponent, canActivate: [AuthGuard] },
  { path: "games/view/:id", component: ViewComponent, canActivate: [AuthGuard] },
  { path: "admin/characteristics", component: ListComponent, canActivate: [AuthGuard] },
  { path: "admin/characteristics/add", component: AddCharacteristicComponent, canActivate: [AuthGuard] },
  { path: "admin/characteristics/edit/:id", component: EditCharacteristicComponent, canActivate: [AuthGuard] },
  { path: "admin/skills", component: ListSkillComponent, canActivate: [AuthGuard] },
  { path: "admin/skills/add", component: AddSkillComponent, canActivate: [AuthGuard] },
  { path: "admin/skills/edit/:id", component: EditSkillComponent, canActivate: [AuthGuard] },
  { path: "admin/item-types", component: ItemTypeListComponent, canActivate: [AuthGuard] },
  { path: "admin/item-types/add", component: ItemTypeAddComponent, canActivate: [AuthGuard] },
  { path: "admin/item-types/edit/:id", component: ItemTypeEditComponent, canActivate: [AuthGuard] },
  { path: "admin/items", component: ItemListComponent, canActivate: [AuthGuard] },
  { path: "admin/items/add", component: ItemAddComponent, canActivate: [AuthGuard] },
  { path: "admin/items/details/:id", component: ItemDetailsComponent, canActivate: [AuthGuard] },
  { path: "game/:id", component: HomeComponent, canActivate:[AuthGuard] },
  { path: "game/:id/characters", component: CharacterManagementComponent, canActivate:[AuthGuard] },
  { path: "game/:id/locations", component: LocationListComponent, canActivate:[AuthGuard] },
  { path: "game/:id/notes", component: NotesListComponent, canActivate:[AuthGuard] },
  { path: "game/:id/players", component: PlayersListComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
