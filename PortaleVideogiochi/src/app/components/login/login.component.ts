import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingEnum } from 'src/app/model/routing-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private email: string = '';
  private password: string = '';

  public static username: string;
  constructor(private router: Router) { }

  ngOnInit() {
    sessionStorage.clear();
  }

  login(){
    if(this.email==='admin' && this.password==='password'){
      sessionStorage.setItem('admin', 'admin');
      this.router.navigateByUrl(RoutingEnum.base+'/'+RoutingEnum.home);
      this.username = this.email;
    }else{
      if(this.email!=''){
        sessionStorage.setItem(this.email,this.password);
        this.router.navigateByUrl(RoutingEnum.base+'/'+RoutingEnum.home);
        this.username = this.email;
      }
    }
  }
}