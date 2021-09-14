import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CharacterRequest } from 'src/app/models/character/characterRequest';
import { CharacteristicMiddle } from 'src/app/models/characteristic/characteristicMiddle';
import { RollRequest } from 'src/app/models/roll/rollRequest';
import { CharacteristicService } from 'src/app/services/characteristic.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  character: CharacterRequest = {
    gender: "",
    firstName: "",
    lastName: "",
    characteristics: []
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
  ]

  constructor(
    private skillService: SkillService,
    private characteristicService: CharacteristicService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
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

  }

}
