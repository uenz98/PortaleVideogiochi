import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/gameitem';
import { GameListService } from 'src/app/services/game-list.service';
import { DetailToEditService } from 'src/app/services/detail-to-edit.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameItem[];

  constructor(private gameService: GameListService, private detailService: DetailToEditService) { }

  ngOnInit() {
    this.gameList = this.gameService.getGameList();
  }

  getElementClicked(id:number){
    return this.gameList[id-1];
  }
 


  @Output('showDetail')
  showDetailEvent: EventEmitter<number> = new EventEmitter();

  showDetail(id:number){
    this.detailService.setGameItem(this.gameService.getGameById(id));
    this.showDetailEvent.emit(id);
  }
}