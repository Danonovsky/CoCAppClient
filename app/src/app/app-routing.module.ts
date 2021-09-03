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

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [RefuseLoggedInGuard] },
  { path: "sign-up", component: SignUpComponent, canActivate: [RefuseLoggedInGuard] },
  { path: "games", component: GamesComponent, canActivate: [AuthGuard] },
  { path: "joined-games", component: JoinedGamesComponent, canActivate: [AuthGuard] },
  { path: "my-games", component: UserGamesComponent, canActivate: [AuthGuard] },
  { path: "games/create", component: CreateGameComponent, canActivate: [AuthGuard] },
  { path: "games/view/:id", component: ViewComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
