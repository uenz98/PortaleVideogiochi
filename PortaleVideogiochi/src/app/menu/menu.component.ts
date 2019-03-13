import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: false},
    {id: 2, descrizione: 'Lista', selezionato: false},
    {id: 3, descrizione: 'Modifica', selezionato: false}
  ];

  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showSection(id: number){
    this.showSectionEvent.emit(id);
  }

}
