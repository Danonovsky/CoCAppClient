import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Item } from 'src/app/models/item/item';
import { ItemAttributeValueRequest } from 'src/app/models/item/itemAttributeValueRequest';
import { ItemMiddleware } from 'src/app/models/item/itemMiddleware';
import { ItemRequest } from 'src/app/models/item/itemRequest';
import { ItemType } from 'src/app/models/item/itemType';
import { ItemTypeAttribute } from 'src/app/models/item/itemTypeAttribute';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  item: ItemRequest = {
    name: "",
    itemTypeId: "",
    attributes: []
  };
  itemTypes: ItemType[] = [];
  itemTypeAttributes: ItemTypeAttribute[] = [];
  itemAttributeValues: ItemAttributeValueRequest[] = [];
  itemMiddlewares: ItemMiddleware[] = [];

  constructor(
    private service: ItemService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItemTypes();
  }

  getItemTypes() {
    this.service.getItemTypes().subscribe(success => {
      this.itemTypes = success.body!;
    });
  }

  getItemTypeAttributes() {
    this.service.getItemTypeAttributes(this.item.itemTypeId).subscribe(success => {
      //this.itemTypeAttributes = success.body!;
      this.itemMiddlewares = [];
      success.body!.forEach(element => {
        this.itemMiddlewares.push({
          name: element.name,
          itemTypeAttributeId: element.id,
          value: ""
        });
      });
    });
  }

  add() {
    this.item.attributes = [];
    this.itemMiddlewares.forEach(element => {
      this.item.attributes.push({
        value: element.value,
        itemTypeAttributeId: element.itemTypeAttributeId
      });
    })
    this.service.addItem(this.item).subscribe(success => {
      this.toastr.success("Item added.");
      this.router.navigate(["admin/items"]);
    }, error => {
      this.toastr.error('An error occured');
    });
  }

  onItemTypeChange(newValue: String) {
    this.item.itemTypeId = newValue;
    this.getItemTypeAttributes();
  }

}
