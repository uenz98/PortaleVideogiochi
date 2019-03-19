import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

}
