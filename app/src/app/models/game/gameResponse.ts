import { UserListResponse } from "../user/list/UserListResponse";

export interface GameResponse {
    id: String,
    name: String,
    user: UserListResponse
}