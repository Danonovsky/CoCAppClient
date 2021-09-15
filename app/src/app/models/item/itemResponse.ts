import { ItemAttributeValueResponse } from "./itemAttributeValueResponse";

export interface ItemResponse {
    id: string,
    name: string,
    itemTypeName: string,
    itemAttributeValues: ItemAttributeValueResponse[]
}