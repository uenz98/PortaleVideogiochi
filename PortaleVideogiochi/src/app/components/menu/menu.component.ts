import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuList: MenuItem[];

  @Output('showSection')
  showSectionEvent: EventEmitter<number> = new EventEmitter();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuList = this.menuService.menuList;
  }

  showSection(id: number){
    this.showSectionEvent.emit(id);
  }

}
