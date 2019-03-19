import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: false, endpoint: ''},
    {id: 2, descrizione: 'Lista', selezionato: false, endpoint: ''},
    {id: 3, descrizione: 'Modifica', selezionato: false, endpoint: ''}
  ];
  constructor() { }
}
