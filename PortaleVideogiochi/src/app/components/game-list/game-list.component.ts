import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameListService } from 'src/app/services/game-list.service';
import { GameItem } from 'src/app/model/gameitem';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  listService: GameListService = new GameListService();
  private gameList:GameItem[] = this.listService.getGameList();

  constructor() { }

  ngOnInit() {
  }

  canNavigateForward(): boolean {
    return !!sessionStorage.getItem('navigateFrom');
  }
}