import { Component, OnInit } from '@angular/core';
import { GameResponse } from 'src/app/models/game/gameResponse';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-user-games',
  templateUrl: './user-games.component.html',
  styleUrls: ['./user-games.component.css']
})
export class UserGamesComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  games: GameResponse[] = [];

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getUserGames().subscribe(success => {
      this.games = success.body!;
    });
  }

}
