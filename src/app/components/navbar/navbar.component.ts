import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalvarsService } from '../../_services/globalvars.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public globalvars : GlobalvarsService) {
  }

  ngOnInit():void {

  }
}
