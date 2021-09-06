import { UserListResponse } from "../user/list/userListResponse";

export interface GameResponse {
    id: String,
    name: String,
    user: UserListResponse
}