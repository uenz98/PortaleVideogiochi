import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: MenuItem[] = [
    {id:1, descrizione:"Counter Strike: Global Offensive", selezionato: false},
    {id:2, descrizione:"Grand Theft Auto 5", selezionato: false},
    {id:3, descrizione:"Minecraft", selezionato: false},
    {id:4, descrizione:"The Elder Scrolls V: Skyrim", selezionato: false},
    {id:5, descrizione:"Keep Talking and Nobody Explodes", selezionato: false},
    {id:6, descrizione:"League of Legends", selezionato: false},
    {id:7, descrizione:"Fallout 4", selezionato: false},
  ]

  constructor() { }

  ngOnInit() {
  }

  getGameList(){
    return this.gameList;
  }


  @Output('showDetail')
  showDetailEvent: EventEmitter<number> = new EventEmitter();

  showDetail(id:number){
    this.showDetailEvent.emit(id);
  }
}
