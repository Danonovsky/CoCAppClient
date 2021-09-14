import { CharacteristicResponse } from "../characteristic/characteristicResponse";

export interface CharacterResponse {
    id: string,
    gender: string,
    firstName: string,
    lastName: string,
    characteristics: CharacteristicResponse[]
}