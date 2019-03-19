import { Injectable } from '@angular/core';
import { GameItem } from '../model/gameitem';

@Injectable({
  providedIn: 'root'
})
export class GameListService {
  gameList: GameItem[] = [
    {id:1, nome:"Counter Strike: Global Offensive", descrizione:"",genere:"FPS",rating:8, prezzo:0,annoDiUscita:2010},
    {id:2, nome:"Grand Theft Auto 5", descrizione:"",genere:"Action",rating:8, prezzo:30,annoDiUscita:2013},
    {id:3, nome:"Minecraft", descrizione:"",genere:"Sandbox",rating:3, prezzo:22,annoDiUscita:2009},
    {id:4, nome:"The Elder Scrolls V: Skyrim", descrizione:"",genere:"RPG",rating:10, prezzo:20,annoDiUscita:2011},
    {id:5, nome:"Keep Talking and Nobody Explodes", descrizione:"",genere:"Simulation",rating:7, prezzo:0,annoDiUscita:2015},
    {id:6, nome:"League of Legends", descrizione:"",genere:"MOBA",rating:8, prezzo:0,annoDiUscita:2011},
    {id:7, nome:"Fallout 4", descrizione:"",genere:"RPG",rating:8.5, prezzo:0,annoDiUscita:2015}
  ];
  constructor() { }

  getGameList(){
    return this.gameList;
  }

  getGameById(id:number): GameItem{
    return this.gameList[id-1];
  }

  modify(game:GameItem){
    this.gameList[game.id] = game;
  }
}