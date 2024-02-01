import {CardTypeEnum, CardValueEnum} from "../enums.ts";


export interface ICard {
    type: CardTypeEnum
    value: CardValueEnum
    image: string
}
