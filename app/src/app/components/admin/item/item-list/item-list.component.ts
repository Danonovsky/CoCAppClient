import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  list: Item[] = [];

  constructor(
    private service: ItemService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
     this.service.getItems().subscribe(success => {
       this.list = success.body!;
    }, error => {
      this.toastr.error('An error occured');
    });
  }

  delete(id: String) {
    this.service.deleteItem(id).subscribe(success => {
      this.toastr.success('Item type successfully deleted.');
      this.getAll();
    }, error => {
      this.toastr.error('An error occured. Item type not deleted.');
    });
  }

}
