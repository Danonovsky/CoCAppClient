import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameCreateRequest } from 'src/app/models/game/gameCreateRequest';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  warning?: String;
  game: GameCreateRequest = {
    name: "",
    private: false
  };

  constructor(
    private service: GameService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.game).subscribe(success => {
      console.log("Created!");
      this.router.navigate(["games"]);
    },
    err => {

    })
  }

  changePrivacy(value: Boolean): void {
    this.game.private = value
  }

}
