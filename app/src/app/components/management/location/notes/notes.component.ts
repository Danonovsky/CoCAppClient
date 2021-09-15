import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NoteRequest } from 'src/app/models/note/noteRequest';
import { NoteResponse } from 'src/app/models/note/noteResponse';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnChanges {
  @Input() id: string = '';
  request: NoteRequest = {
    locationId: '',
    content: ''
  };

  notes: NoteResponse[] = [];

  ngOnChanges(_: SimpleChanges) {
    this.getAll();
    this.request.content = '';
  }

  constructor(
    private toastr: ToastrService,
    private managementService: ManagementService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.managementService.getAllNotesFromLocation(this.id).subscribe(success => {
      this.notes = success.body!;
    });
  }

  add() {
    this.request.locationId = this.id;
    this.managementService.addNoteToLocation(this.request).subscribe(_ => {
      this.toastr.success('Note added!');
      this.getAll();
    }, _ => {
      this.toastr.error('An error occured! Note not added.');
    });
  }

  delete(id: string) {
    console.log(id);
    this.managementService.deleteNoteFromLocation(id).subscribe(_ => {
      this.toastr.success('Note deleted!');
      this.getAll();
    }, _ => {
      this.toastr.error('An error occured! Note not deleted.');
    });
  }

}
