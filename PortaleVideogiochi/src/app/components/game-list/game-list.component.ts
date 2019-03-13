import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameItem } from 'src/app/model/gameitem';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  gameList: GameItem[];

  constructor(private gameService: GameListService) { }

  ngOnInit() {
    this.gameList = this.gameService.getGameList();
  }

 


  @Output('showDetail')
  showDetailEvent: EventEmitter<number> = new EventEmitter();

  showDetail(id:number){
    this.showDetailEvent.emit(id);
  }
}
