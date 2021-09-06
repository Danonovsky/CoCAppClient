import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemType } from 'src/app/models/item/itemType';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-type-list',
  templateUrl: './item-type-list.component.html',
  styleUrls: ['./item-type-list.component.css']
})
export class ItemTypeListComponent implements OnInit {

  list: ItemType[] = [];

  constructor(
    private service: ItemService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
     this.service.getItemTypes().subscribe(success => {
       this.list = success.body!;
    }, error => {
      this.toastr.error('An error occured');
    });
  }

  delete(id: String) {
    this.service.deleteItemType(id).subscribe(success => {
      this.toastr.success('Item type successfully deleted.');
      this.getAll();
    }, error => {
      this.toastr.error('An error occured. Item type not deleted.');
    });
  }
}
