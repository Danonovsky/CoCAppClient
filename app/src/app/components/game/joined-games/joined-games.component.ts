import { Component, OnInit } from '@angular/core';
import { GameResponse } from 'src/app/models/game/gameResponse';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-joined-games',
  templateUrl: './joined-games.component.html',
  styleUrls: ['./joined-games.component.css']
})
export class JoinedGamesComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  games: GameResponse[] = [];

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.gameService.getJoinedGames().subscribe(success => {
      this.games = success.body!;
    });
  }

}
