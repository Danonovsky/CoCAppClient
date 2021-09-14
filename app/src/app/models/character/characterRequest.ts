import { CharacteristicRequest } from "../characteristic/characteristicRequest";

export interface CharacterRequest {
    gender: string,
    firstName: string,
    lastName: string,
    characteristics: CharacteristicRequest[],
    gameId: string
}