import { ICard } from "./card.model";


export interface IPrepare {
    cards?: ICard[]; //list of all cards
    selectedCard_1?: ICard; //selected card1
    selectedCard_2?: ICard; //selected card2
    selectedIndex_1?: number;   //selected indices
    selectedIndex_2?: number;
    progress?: number;
    fullTrack?: HTMLAudioElement;
    flipAudio?: HTMLAudioElement;
    goodTrack?: HTMLAudioElement;
    failTrack?: HTMLAudioElement;
    gameOverAudio?: HTMLAudioElement;
}