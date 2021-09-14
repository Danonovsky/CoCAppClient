import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationRequest } from 'src/app/models/location/locationRequest';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-location-add',
  templateUrl: './location-add.component.html',
  styleUrls: ['./location-add.component.css']
})
export class LocationAddComponent implements OnInit {

  location: LocationRequest = {
    name: '',
    gameId: ''
  };

  @Output() newItemEvent = new EventEmitter();

  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private managementService: ManagementService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if(!id) {
      this.router.navigate(["/games"]);
    }
    this.location.gameId = id!;

  }

  locationInit() {
    this.location.name = '';
  }

  add() {
    this.managementService.addLocation(this.location).subscribe(_ => {
      this.newItemEvent.emit();
    }, _ => {
      this.toastr.error("An error occured. Location not added.");
    });
  }

}
