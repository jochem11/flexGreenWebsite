import { Component, OnInit, Input} from '@angular/core';
import { GlobalvarsService } from 'src/app/_services/globalvars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit{

  p1:boolean = false;
  pulse:boolean = false;
  temp:boolean = false;
  Relay:boolean = false;
  mBus:boolean = false;
  modbus:boolean = false;

  constructor (private glovalvars : GlobalvarsService, private router : Router) {}

  ngOnInit():void {
  }

  updateVars(id:string, title:string, type:string) {
    this.glovalvars.chipID = id;
    this.glovalvars.title = title;
    this.glovalvars.type = type;
    this.router.navigate(['/dashboard'])
  }

  allFalse() {
    this.p1 = this.pulse = this.temp = this.Relay = this.mBus = this.modbus = false;
  }

  showP1() {
    this.allFalse();
    this.p1 = true;
  }

  showPulse() {
    this.allFalse();
    this.pulse = true;
  }

  showTemp() {
    this.allFalse();
    this.temp = true;
  }

  showRelay() {
    this.allFalse();
    this.Relay = true;
  }

  showMbus() {
    this.allFalse();
    this.mBus = true;
  }

  showModbus() {
    this.allFalse();
    this.modbus = true;
  }
}
