import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocationResponse } from 'src/app/models/location/locationResponse';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  gameId: string = '';
  locations: LocationResponse[] = [];
  details: LocationResponse = {
    id: '',
    name: '',
    gameId: '',
    image: ''
  };

  constructor(
    private managementService: ManagementService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) {
      this.router.navigate(["/games"]);
    }
    else {
      this.gameId = id;
      this.getLocations();
    }
  }

  getLocations() {
    this.managementService.getAllLocations(this.gameId).subscribe(success => {
      this.locations = success.body!;
    });
  }

  setDetails(id: string) {
    this.details = this.locations.find(x => x.id==id)!;
  }

  delete(id: string) {
    this.managementService.deleteLocation(id).subscribe(success => {
      this.toastr.success("A location deleted successfully.");
      this.getLocations();
    }, _ => {
      this.toastr.error("An error occured. Location not deleted.");
    });
  }

}
