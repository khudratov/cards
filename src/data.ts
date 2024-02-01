import {CardTypeEnum, CardValueEnum} from "./enums.ts";
import {ICard} from "./assets/types.ts";

export const cardsCollection: ICard[] = [
    {
        value: CardValueEnum.NINE,
        type: CardTypeEnum.SPADES,
        image: '/cards/spades/9.png'
    },
    {
        value: CardValueEnum.TEN,
        type: CardTypeEnum.SPADES,
        image: '/cards/spades/10.png'
    },
    {
        value: CardValueEnum.JACK,
        type: CardTypeEnum.SPADES,
        image: '/cards/spades/jack.png'
    }
    ,
    {
        value: CardValueEnum.QUEEN,
        type: CardTypeEnum.SPADES,
        image: '/cards/spades/queen.png'
    }
    ,
    {
        value: CardValueEnum.KING,
        type: CardTypeEnum.SPADES,
        image: '/cards/spades/king.png'
    }
    ,
    {
        value: CardValueEnum.ACE,
        type: CardTypeEnum.SPADES,
        image: '/cards/spades/ace.png'
    },
    {
        value: CardValueEnum.NINE,
        type: CardTypeEnum.CLUBS,
        image: '/cards/clubs/9.png'
    },
    {
        value: CardValueEnum.TEN,
        type: CardTypeEnum.CLUBS,
        image: '/cards/clubs/10.png'
    },
    {
        value: CardValueEnum.JACK,
        type: CardTypeEnum.CLUBS,
        image: '/cards/clubs/jack.png'
    }
    ,
    {
        value: CardValueEnum.QUEEN,
        type: CardTypeEnum.CLUBS,
        image: '/cards/clubs/queen.png'
    }
    ,
    {
        value: CardValueEnum.KING,
        type: CardTypeEnum.CLUBS,
        image: '/cards/clubs/king.png'
    }
    ,
    {
        value: CardValueEnum.ACE,
        type: CardTypeEnum.CLUBS,
        image: '/cards/clubs/ace.png'
    },
    {
        value: CardValueEnum.NINE,
        type: CardTypeEnum.DIAMONDS,
        image: '/cards/diamonds/9.png'
    },
    {
        value: CardValueEnum.TEN,
        type: CardTypeEnum.DIAMONDS,
        image: '/cards/diamonds/10.png'
    },
    {
        value: CardValueEnum.JACK,
        type: CardTypeEnum.DIAMONDS,
        image: '/cards/diamonds/jack.png'
    }
    ,
    {
        value: CardValueEnum.QUEEN,
        type: CardTypeEnum.DIAMONDS,
        image: '/cards/diamonds/queen.png'
    }
    ,
    {
        value: CardValueEnum.KING,
        type: CardTypeEnum.DIAMONDS,
        image: '/cards/diamonds/king.png'
    }
    ,
    {
        value: CardValueEnum.ACE,
        type: CardTypeEnum.DIAMONDS,
        image: '/cards/diamonds/ace.png'
    }
]