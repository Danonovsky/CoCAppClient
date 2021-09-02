import { Component, OnInit } from '@angular/core';
import { GameResponse } from 'src/app/models/game/gameResponse';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  games: GameResponse[] = [];

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getPossibleGames().subscribe(success => {
      this.games = success.body!;
      console.log(this.games);
    },
    err => {
      console.log("error");
    });
  }

}
