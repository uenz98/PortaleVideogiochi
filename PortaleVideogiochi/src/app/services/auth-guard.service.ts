import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate, CanActivateChild } from '@angular/router';
import { GameListComponent } from '../components/game-list/game-list.component';
import { RoutingEnum } from '../model/routing-enum';

@Injectable()
export class AuthGuard implements CanActivateChild, CanDeactivate<GameListComponent> {
    canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if(sessionStorage.getItem('navigateFrom'))
            return true;
        return false;
        
    }

    canDeactivate(component: GameListComponent, currentRoute: import("@angular/router").ActivatedRouteSnapshot, currentState: import("@angular/router").RouterStateSnapshot, nextState?: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        if (component.canNavigateForward()) {
            return true;
        } else {
            return false;
        }
    }


    constructor(private router: Router) {

    }

}
