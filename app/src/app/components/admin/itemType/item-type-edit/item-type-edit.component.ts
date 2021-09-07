import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemType } from 'src/app/models/item/itemType';
import { ItemTypeAttribute } from 'src/app/models/item/itemTypeAttribute';
import { ItemTypeAttributeRequest } from 'src/app/models/item/itemTypeAttributeRequest';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-type-edit',
  templateUrl: './item-type-edit.component.html',
  styleUrls: ['./item-type-edit.component.css']
})
export class ItemTypeEditComponent implements OnInit {

  id: String = "";
  itemType?: ItemType;
  itemTypeAttributes: ItemTypeAttribute[] = [];
  model: ItemTypeAttributeRequest = {
    itemTypeId: "",
    name: ""
  };

  constructor(
    private toastr: ToastrService,
    private service: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.id = this.route.snapshot.paramMap.get('id') as String;
    this.service.getItemType(this.id).subscribe(success => {
      this.itemType = success.body!;
      this.model.itemTypeId=this.id;
      this.getAttributes();
    }, error => {
      this.toastr.error('An item type with given ID not found');
      this.router.navigate(["admin/item-types"]);
    });
  }

  getAttributes() {
    this.service.getItemTypeAttributes(this.id).subscribe(success => {
      this.itemTypeAttributes = success.body!;
    }, error => {
      this.toastr.error("An error occured.");
    });
  }

  addAttribute() {
    this.service.addItemTypeAttribute(this.model).subscribe(success => {
      this.model.name = "";
      this.toastr.success("Attribute added succesfully.");
      this.getAttributes();
    }, error => {
      this.toastr.error("An error occured.");
    });
  }

  deleteAttribute(id: String) {
    this.service.deleteItemTypeAttribute(id).subscribe(success => {
      this.toastr.success("Attribute deleted succesfully.");
      this.getAttributes();
    }, error => {
      this.toastr.error("An error occured.");
    });
  }
}
