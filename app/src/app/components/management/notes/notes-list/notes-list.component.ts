import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NoteListResponse } from 'src/app/models/note/noteListResponse';
import { ManagementService } from 'src/app/services/management.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: NoteListResponse[] = [];
  gameId: string = '';

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
      this.getAll();
    }
  }

  getAll() {
    this.managementService.getAllNotes(this.gameId).subscribe(_ => {
      console.log(_.body);
      this.notes = _.body!;
    });
  }

  delete(id: string) {
    this.managementService.deleteNoteFromLocation(id).subscribe(success => {
      this.toastr.success("Note deleted successfully.");
      this.getAll();
    }, _ => {
      this.toastr.error("An error occured. Note not deleted.");
    });
  }

}
