import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CharacterResponse } from 'src/app/models/character/characterResponse';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-character-management',
  templateUrl: './character-management.component.html',
  styleUrls: ['./character-management.component.css']
})
export class CharacterManagementComponent implements OnInit {

  gameId: string = '';
  characters: CharacterResponse[] = [];
  details: CharacterResponse = {
    firstName: '',
    characteristics: [],
    gender: '',
    lastName: '',
    id: '',
    image: ''
  };

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
      this.getCharacters();
    }
  }

  getCharacters() {
    this.managementService.getAllCharacters(this.gameId).subscribe(success => {
      this.characters = success.body!;
    });
  }

  setDetails(id: string) {
    this.details = this.characters.find(x => x.id==id)!;
  }

  delete(id: string) {
    this.managementService.deleteCharacter(id).subscribe(success => {
      this.toastr.success("A character deleted successfully.");
      this.getCharacters();
    }, _ => {
      this.toastr.error("An error occured. Character not deleted.");
    });
  }
}
