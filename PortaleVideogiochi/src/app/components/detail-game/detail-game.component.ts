import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameItem } from 'src/app/model/gameitem';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.scss']
})
export class DetailGameComponent implements OnInit {

  constructor(private route: ActivatedRoute,) { 
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

  @Input('input-game-item')
  game:GameItem;

}
