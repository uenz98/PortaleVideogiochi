import { Injectable } from '@angular/core';
import { MenuItem } from '../model/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  menuList: MenuItem[] = [
    {id: 1, descrizione: 'Home', selezionato: false},
    {id: 2, descrizione: 'Lista', selezionato: false},
    {id: 3, descrizione: 'Modifica', selezionato: false}
  ];
  constructor() { }
}
