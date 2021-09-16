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

  fileToUpload: File | null = null;
  location: LocationRequest = {
    name: '',
    gameId: '',
    image: ''
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

  handleFileInput(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if(fileList) {
      this.fileToUpload = fileList.item(0);
      console.log(this.fileToUpload);
    }
  }

  add() {
    this.managementService.addImage(this.fileToUpload!).subscribe(_ => {
      console.log(_.body?.dbPath);
      this.location.image = _.body!.dbPath;
      this.managementService.addLocation(this.location).subscribe(_ => {
        this.newItemEvent.emit();
      }, _ => {
        this.toastr.error("An error occured. Location not added.");
      });
    });
  }

}
