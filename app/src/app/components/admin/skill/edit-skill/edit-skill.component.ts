import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DefaultSkillRequest } from 'src/app/models/skill/defaultSkillRequest';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {
  id: String = "";
  model?: DefaultSkillRequest;

  constructor(
    private toastr: ToastrService,
    private service: SkillService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.id = this.route.snapshot.paramMap.get('id') as String;
    this.service.get(this.id).subscribe(success => {
      this.model = success.body!;
    }, error => {
      this.toastr.error('A skill with given ID not found');
      this.router.navigate(["admin/skills"]);
    });
  }

  save() {
    this.service.update(this.id,this.model!).subscribe(success => {
      this.toastr.info("Skill updated.");
    }, error => {
      this.toastr.error("Skill not updated.");
    })
  }
}
