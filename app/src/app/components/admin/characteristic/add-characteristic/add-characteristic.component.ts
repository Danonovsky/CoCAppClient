import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DefaultCharacteristicRequest } from 'src/app/models/characteristic/defaultCharacteristicRequest';
import { CharacteristicService } from 'src/app/services/characteristic.service';

@Component({
  selector: 'app-add-characteristic',
  templateUrl: './add-characteristic.component.html',
  styleUrls: ['./add-characteristic.component.css']
})
export class AddCharacteristicComponent implements OnInit {

  characteristic: DefaultCharacteristicRequest = {
    name: "",
    value: 0
  };

  constructor(
    private service: CharacteristicService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.add(this.characteristic).subscribe(success => {
      this.toastr.success("Characteristic added.");
      this.router.navigate(["admin/characteristics"]);
    }, error => {
      this.toastr.error('An error occured');
    });
  }

}
