import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CharacterRequest } from 'src/app/models/character/characterRequest';
import { CharacteristicMiddle } from 'src/app/models/characteristic/characteristicMiddle';
import { RollRequest } from 'src/app/models/roll/rollRequest';
import { CharacteristicService } from 'src/app/services/characteristic.service';
import { ManagementService } from 'src/app/services/management.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  gameId: string = '';
  character: CharacterRequest = {
    gender: "",
    firstName: "",
    lastName: "",
    characteristics: [],
    gameId: ''
  };
  characteristics: CharacteristicMiddle[] = [];
  rollRequest: RollRequest = {
    amount: 1,
    dice: 6,
    static: 0
  }
  charRolls: RollRequest[] = [
    {amount: 3, dice: 6, static: 0},
    {amount: 3, dice: 6, static: 0},
    {amount: 3, dice: 6, static: 0},
    {amount: 2, dice: 6, static: 6},
    {amount: 2, dice: 6, static: 6},
    {amount: 3, dice: 6, static: 0},
    {amount: 3, dice: 6, static: 0},
    {amount: 2, dice: 6, static: 6}
  ];

  @Output() newItemEvent = new EventEmitter();

  constructor(
    private skillService: SkillService,
    private characteristicService: CharacteristicService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private managementService: ManagementService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(!id) {
      this.router.navigate(["/games"]);
    }
    this.gameId = id!;
    this.characteristicService.getAll().subscribe(success => {
      success.body?.forEach(element => {
        this.characteristics.push({
          defaultCharacteristicId: element.id,
          name: element.name,
          value: element.value,
          advancement: 0
        });
      });
    });

  }

  onGenderChange(value: string) {
    this.character.gender = value;
  }

  getSummary(n1: Number, n2: Number) {
    return (n1 as number) + (n2 as number);
  }

  characterInit() {
    this.character.firstName = '';
    this.character.lastName = '';
    this.character.gender = '';

    this.characteristics.forEach(e => {
      e.advancement = 0;
    });
  }

  rollCharacteristics() {
    this.skillService.getRolls(this.charRolls).subscribe(success => {
      success.body?.forEach((e, index) => {
        this.characteristics[index].advancement = e.summary * 5;
      });

      this.characteristics[8].advancement = 
      Math.floor((this.characteristics[1].value + this.characteristics[1].advancement + 
        this.characteristics[4].value + this.characteristics[4].advancement) / 10);
    });
  }

  roll() {
    this.rollCharacteristics();
  }

  add() {
    this.character.gameId = this.gameId;
    this.character.characteristics = [];
    this.characteristics.forEach(e => {
      this.character.characteristics.push({
        advancement: e.advancement,
        defaultCharacteristicId: e.defaultCharacteristicId,
        value: e.value
      });
    });
    console.log(this.character);
    this.managementService.addCharacter(this.character).subscribe(_ => {
      this.newItemEvent.emit();
    }, _ => {
      this.toastr.error("An error occured. Character not added.");
    });
  }

}
