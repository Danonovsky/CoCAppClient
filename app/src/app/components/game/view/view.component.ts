import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    
    this.getGame();
  }

  getGame(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(id == null) {
      this.toastr.error('No game found with given ID.');
      this.router.navigate(['/games']);
    }
    else {
      this.gameService.get(id).subscribe(success => {
        this.game = success.body!;
      }, error => {
        this.router.navigate(['/games']);
      });
    }
    
  }

  join(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.gameService.join(id!).subscribe(success => {
      this.toastr.success('Successfully joined a game.');
    }, error => {
      this.toastr.error('An error occured.');
    })
  }

}
