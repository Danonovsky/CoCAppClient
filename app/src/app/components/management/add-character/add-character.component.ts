import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RollRequest } from 'src/app/models/roll/rollRequest';
import { DefaultSkillResponse } from 'src/app/models/skill/defaultSkillResponse';
import { SkillMiddle } from 'src/app/models/skill/skillMiddle';
import { SkillRequest } from 'src/app/models/skill/skillRequest';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  skills: SkillMiddle[] = [];
  defaultSkills: DefaultSkillResponse[] = [];
  rollRequest: RollRequest = {
    amount: 1,
    dice: 6,
    static: 0
  }

  constructor(
    private skillService: SkillService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.skillService.getAll().subscribe(success => {
      success.body?.forEach(element => {
        this.skills.push({
          defaultSkillId: element.id,
          name: element.name,
          value: element.value,
          advancement: 0
        });
      });
    });
  }

  getSummary(n1: Number, n2: Number) {
    return (n1 as number) + (n2 as number);
  }

  roll() {
    this.skillService.getRoll(this.rollRequest).subscribe(success => {
      console.log(success.body?.summary);
      this.skills.forEach(element => {
        element.advancement = (success.body?.summary! as number) * 5;
      });
    });
  }

  add() {

  }

}
