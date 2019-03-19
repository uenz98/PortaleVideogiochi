import { Injectable } from '@angular/core';
import { GameItem } from '../model/gameitem';

@Injectable({
  providedIn: 'root'
})
export class DetailToEditService {

  game:GameItem;

  constructor() { }



  getItemClicked(): GameItem{
    return this.game;
  }

  setGameItem(gameItem: GameItem){
    this.game = gameItem;
  }
}
