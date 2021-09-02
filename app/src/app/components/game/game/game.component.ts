import { Component, Input, OnInit } from '@angular/core';
import { GameResponse } from 'src/app/models/game/gameResponse';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  @Input() game!: GameResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
