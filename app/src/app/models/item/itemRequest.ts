import { ItemAttributeValueRequest } from "./itemAttributeValueRequest";

export interface ItemRequest {
    name: String,
    itemTypeId: String,
    attributes: ItemAttributeValueRequest[]
}