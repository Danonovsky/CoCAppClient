import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameResponse } from 'src/app/models/game/gameResponse';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  game!: GameResponse;
  constructor(
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.getGame();
  }

  getGame(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id == null) this.router.navigate(['/games']);
    this.gameService.get(id!).subscribe(success => {
      console.log(success.body);
    }, error => {
      console.log("Error");
      this.router.navigate(['/games']);
    });
  }

  join(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.gameService.join(id!).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    })
  }

}
