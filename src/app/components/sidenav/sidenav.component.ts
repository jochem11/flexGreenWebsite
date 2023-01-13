import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  status: boolean = false;
  status1: boolean = true;
  status2: boolean = false;
  status3: boolean = false;

  ngOnInit():void {

  }


  currentRoute: string;
  constructor(private router : Router, private authenticationService: AuthenticationService) {
    this.currentRoute = "Demo";
    this.router.events.subscribe((event : Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        switch (this.currentRoute) {
          case '/dashboard' : {
            this.changebtn1('1');
            break;
          }
          case '/browser' : {
            this.changebtn1('2');
            break;
          }
          case '/users' : {
            this.changebtn1('3');
            break;
          }
          case '/settings' : {
            this.changebtn1('4');
            break;
          }
          case '/' : {
            this.changebtn1('5');
            break;
          }
          default : {
            this.changebtn1('6');
            break;
          }
        }
      }
    })
  }

  changebtn1(type : string) {
    switch (type) {
      case '1': {
        this.status = true;
        this.status1 = false;
        this.status2 = false;
        this.status3 = false;
        break;
      }
      case '2' : {
        this.status = false;
        this.status1 = true;
        this.status2 = false;
        this.status3 = false;
        break;
      }
      case '3' : {
        this.status = false;
        this.status1 = false;
        this.status2 = true;
        this.status3 = false;
        break;
      }
      case '4' : {
        this.status = false;
        this.status1 = false;
        this.status2 = false;
        this.status3 = true;
        break;
      }
      case '5' : {
        this.status = true;
        this.status1 = false;
        this.status2 = false;
        this.status3 = false;
        break;
      }
      case '6' : {
        this.status = false;
        this.status1 = false;
        this.status2 = false;
        this.status3 = false;
        break;
      }
    }
  }
  logout() {
    this.authenticationService.logout();
  }
}
