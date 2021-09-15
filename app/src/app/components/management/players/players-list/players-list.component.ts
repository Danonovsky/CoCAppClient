import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayerResponse } from 'src/app/models/game/playerResponse';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: PlayerResponse[] = [];
  gameId: string = '';

  constructor(
    private managementService: ManagementService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) {
      this.router.navigate(["/games"]);
    }
    else {
      this.gameId = id;
      this.getAll();
    }
  }

  getAll() {
    this.managementService.getAllPlayers(this.gameId).subscribe(_ => {
      this.players = _.body!;
    });
  }
}
