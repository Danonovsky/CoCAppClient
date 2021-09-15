import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemResponse } from 'src/app/models/item/itemResponse';
import { LocationItemRequest } from 'src/app/models/item/locationItemRequest';
import { LocationItemResponse } from 'src/app/models/item/locationItemResponse';
import { ItemService } from 'src/app/services/item.service';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() id: string = '';
  request: LocationItemRequest = {
    locationId: '',
    itemId: ''
  };

  items: ItemResponse[] = [];
  characterItems: LocationItemResponse[] = [];

  ngOnChanges(_: SimpleChanges) {
    this.getAll();
    this.request.itemId = '';
  }

  constructor(
    private toastr: ToastrService,
    private managementService: ManagementService,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.getAll();
    this.getItems();
  }

  onItemChange(newValue: string) {
    this.request.itemId = newValue;
  }

  getAll() {
    this.managementService.getAllItemsFromLocation(this.id).subscribe(success => {
      this.characterItems = success.body!;
    });
  }

  getItems() {
    this.itemService.getItems().subscribe(_ => {
      this.items = _.body!;
    });
  }

  add() {
    this.request.locationId = this.id;
    this.managementService.addItemToLocation(this.request).subscribe(_ => {
      this.toastr.success('Item added to location.');
      this.getAll();
    }, _ => {
      this.toastr.error('An error occured. Item not added.');
    });
    
  }

  delete(id: string) {
    this.managementService.deleteItemFromLocation(id).subscribe(_ => {
      this.toastr.success('Item deleted!');
      this.getAll();
    }, _ => {
      this.toastr.error('An error occured! Item not deleted.');
    });
  }

}
