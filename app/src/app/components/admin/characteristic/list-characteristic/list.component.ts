import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DefaultCharacteristicResponse } from 'src/app/models/characteristic/defaultCharacteristicResponse';
import { CharacteristicService } from 'src/app/services/characteristic.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: DefaultCharacteristicResponse[] = [];

  constructor(
    private service: CharacteristicService,
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
      this.toastr.success('Characteristic successfully deleted.');
      this.getAll();
    }, error => {
      this.toastr.error('An error occured. Characteristic not deleted.');
    });
  }

}
