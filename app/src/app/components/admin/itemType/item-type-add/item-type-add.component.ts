import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemType } from 'src/app/models/item/itemType';
import { ItemTypeRequest } from 'src/app/models/item/itemTypeRequest';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-type-add',
  templateUrl: './item-type-add.component.html',
  styleUrls: ['./item-type-add.component.css']
})
export class ItemTypeAddComponent implements OnInit {

  itemType: ItemTypeRequest = {
    name: ""
  };

  constructor(
    private service: ItemService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  add() {
    this.service.addItemType(this.itemType).subscribe(success => {
      this.toastr.success("Item type added.");
      this.router.navigate(["admin/item-types"]);
    }, error => {
      this.toastr.error('An error occured');
    });
  }

}
