import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DefaultSkillRequest } from 'src/app/models/skill/defaultSkillRequest';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  skill: DefaultSkillRequest = {
    name: "",
    value: 0
  };

  constructor(
    private service: SkillService,
    private toastr: ToastrService,
    private router: Router
    ) { }

    ngOnInit(): void {
    }
  
    add() {
      this.service.add(this.skill).subscribe(success => {
        this.toastr.success("Skill added.");
        this.router.navigate(["admin/skills"]);
      }, error => {
        this.toastr.error('An error occured');
      });
    }

}
