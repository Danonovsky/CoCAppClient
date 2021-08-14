import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { GamesComponent } from './components/game/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RefuseLoggedInGuard } from './guards/refuse-logged-in.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [RefuseLoggedInGuard] },
  { path: "sign-up", component: SignUpComponent, canActivate: [RefuseLoggedInGuard] },
  { path: "games", component: GamesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
