import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { RoutingEnum } from 'src/app/model/routing-enum';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private username: string;
  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: false, endpoint: '/'+RoutingEnum.base +'/'+ RoutingEnum.home},
    {id: 2, descrizione: 'Lista', selezionato: false, endpoint: '/'+RoutingEnum.base +'/'+ RoutingEnum.lista}
  ];

  constructor() { }

  ngOnInit() {
  }

  isAdmin(): boolean{
    this.username= LoginComponent.username
    return !!sessionStorage.getItem('admin');
  }

}
