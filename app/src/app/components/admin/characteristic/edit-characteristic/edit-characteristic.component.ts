import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DefaultCharacteristicRequest } from 'src/app/models/characteristic/defaultCharacteristicRequest';
import { CharacteristicService } from 'src/app/services/characteristic.service';

@Component({
  selector: 'app-edit-characteristic',
  templateUrl: './edit-characteristic.component.html',
  styleUrls: ['./edit-characteristic.component.css']
})
export class EditCharacteristicComponent implements OnInit {
  id: String = "";
  model?: DefaultCharacteristicRequest;

  constructor(
    private toastr: ToastrService,
    private service: CharacteristicService,
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
      this.toastr.error('A characteristic with given ID not found');
      this.router.navigate(["admin/characteristics"]);
    });
  }

  save() {
    this.service.update(this.id,this.model!).subscribe(success => {
      this.toastr.info("Characteristic updated.");
    }, error => {
      this.toastr.error("Characteristic not updated.");
    })
  }

}
