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
import { ListComponent } from './components/admin/characteristic/list/list.component';
import { AddCharacteristicComponent } from './components/admin/characteristic/add-characteristic/add-characteristic.component';

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
    AddCharacteristicComponent
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
