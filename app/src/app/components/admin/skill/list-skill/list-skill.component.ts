import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DefaultSkillResponse } from 'src/app/models/skill/defaultSkillResponse';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-list-skill',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.css']
})
export class ListSkillComponent implements OnInit {

  list: DefaultSkillResponse[] = [];

  constructor(
    private service: SkillService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
     this.service.getAll().subscribe(success => {
       this.list = success.body!;
    }, error => {
      this.toastr.error('An error occured');
    });
  }

  delete(id: String) {
    this.service.delete(id).subscribe(success => {
      this.toastr.success('Skill successfully deleted.');
      this.getAll();
    }, error => {
      this.toastr.error('An error occured. Skill not deleted.');
    });
  }

}
