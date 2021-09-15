import { NoteResponse } from "./noteResponse";

export interface NoteListResponse extends NoteResponse {
    location: string
}