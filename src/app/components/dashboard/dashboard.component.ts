import { Component, OnInit } from '@angular/core';
import {GlobalvarsService} from "../../_services/globalvars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(public globalvars : GlobalvarsService, private router: Router) {
  }

  ngOnInit():void {
    if (this.globalvars.chipID == undefined) {
      window.alert('Please Select a module first')
      this.router.navigate(['/browser'])
    }
  }
}
