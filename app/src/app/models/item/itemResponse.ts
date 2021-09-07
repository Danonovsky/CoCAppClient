import { ItemAttributeValueResponse } from "./itemAttributeValueResponse";

export interface ItemResponse {
    id: String,
    name: String,
    itemTypeName: String,
    itemAttributeValues: ItemAttributeValueResponse[]
}