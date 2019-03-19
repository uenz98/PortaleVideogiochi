import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/model/routing-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
      sessionStorage.setItem('navigateFrom', 'navigateFrom');
      this.router.navigateByUrl(RoutingEnum.base+'/'+RoutingEnum.home);
  }

}