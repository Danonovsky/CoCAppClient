import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemResponse } from 'src/app/models/item/itemResponse';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  id?: String;
  model?: ItemResponse

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
    this.service.getItem(this.id).subscribe(success => {
      this.model = success.body!;
    }, error => {
      this.toastr.error('An item with given ID not found');
      this.router.navigate(["admin/items"]);
    });
  }

}
