import { Component, OnInit } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit, CanActivate {

  constructor() { }

  ngOnInit() {
  }
  canActivate(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(sessionStorage.getItem('admin'))
        return true;
    return false;
    
}
}

