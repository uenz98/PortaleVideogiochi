import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { AuthGuard } from './services/auth-guard.service';
import { RoutingEnum } from './model/routing-enum';
import { DetailGameComponent } from './components/detail-game/detail-game.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: RoutingEnum.base, children: [
      { path: RoutingEnum.home, component: HomeComponent },
      { path: RoutingEnum.lista, component: GameListComponent, canDeactivate: [AuthGuard] },
      { path: RoutingEnum.modifica, component: EditGameComponent },
    ],
    canActivateChild: [AuthGuard]
  },
  { path: RoutingEnum.dettaglio + '/:id', component: DetailGameComponent },
  { path: RoutingEnum.login, component: LoginComponent },
  { path: '', redirectTo: '/' + RoutingEnum.login, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }