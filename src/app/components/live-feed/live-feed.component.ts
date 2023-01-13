import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalvarsService } from '../../_services/globalvars.service';
import { HttpClient } from '@angular/common/http';
import { Variable } from 'eslint-scope';


@Component({
  selector: 'app-live-feed',
  templateUrl: './live-feed.component.html',
  styleUrls: ['./live-feed.component.scss']
})
export class LiveFeedComponent implements OnInit, OnDestroy{
  constructor(private globalvars : GlobalvarsService, private http : HttpClient) {}
  id:any = 0;
  errormsg:any;
  data:any;
  verbruikNormaal:string | undefined;
  verbruikDal:string | undefined;
  terugNormaal:string | undefined;
  terugDal:string | undefined;
  actueelVerbruik:string | undefined;
  actueelTerug:string | undefined;
  verbruikF1:string | undefined;
  verbruikF2:string | undefined;
  verbruikF3:string | undefined;
  terugF1:string | undefined;
  terugF2:string | undefined;
  terugF3:string | undefined;
  stroomF1:string | undefined;
  stroomF2:string | undefined;
  stroomF3:string | undefined;
  gas:string | undefined;
  dataReady:boolean = false;
  url:string = environment.apiUrl + 'v1/p1-poort/' + this.globalvars.chipID + '/live/';
  ngOnInit():void {
    if (!this.dataReady) {
      this.getData();
    }
    this.id = setInterval(() => {
      this.getData();
    }, 11000)
  }

  getData() {
    this.http.get(this.url).subscribe({next: (data:any) => {
        console.log(data)
        let jsonString = JSON.parse(JSON.stringify(data));
        this.verbruikNormaal = this.EditNumberDecimal(jsonString["mEVHT"]);
        this.verbruikDal = this.EditNumberDecimal(jsonString["mEVLT"]);
        this.terugNormaal = this.EditNumberDecimal(jsonString["mETHT"]);
        this.terugDal = this.EditNumberDecimal(jsonString["mETLT"]);
        this.actueelVerbruik = this.EditNumberInt(jsonString["mEAV"]);
        this.actueelTerug = this.EditNumberInt(jsonString["mEAT"]);
        this.verbruikF1 = this.EditNumberInt(jsonString["mEF1"]);
        this.verbruikF2 = this.EditNumberInt(jsonString["mEF2"]);
        this.verbruikF3 = this.EditNumberInt(jsonString["mEF3"]);
        this.terugF1 = this.EditNumberInt(jsonString["mEF1R"]);
        this.terugF2 = this.EditNumberInt(jsonString["mEF2R"]);
        this.terugF3 = this.EditNumberInt(jsonString["mEF3R"]);
        this.stroomF1 = this.EditNumberInt(jsonString["mEF1A"]);
        this.stroomF2 = this.EditNumberInt(jsonString["mEF2A"]);
        this.stroomF3 = this.EditNumberInt(jsonString["mEF3A"]);
        this.gas = this.EditNumberDecimal(jsonString["mG"]);
        this.dataReady = true;
      },
      error: (error: {message:any}) => {
        this.errormsg = error.message;
        console.error('error: ', error)
      }
    })
  }

  EditNumberDecimal(number:any) {
    let decimaal:any;
    let getal:any;
    number = Number(number).toFixed(3);
    number = number.toString().split('.');
    getal = this.EditNumberInt(number[0]);
    decimaal = `,${number[1]}`;
    return getal + decimaal;
  }

  EditNumberInt(number:any) {
    number = number.toString();
    if (number.length > 6) {
      number = number.substring(0, number.length - 6) + '.' + number.substring(number.length - 6 , number.length);
      number = number.substring(0, number.length - 3) + '.' + number.substring(number.length - 3 , number.length);
    } else if (number.length > 3) {
      number = number.substring(0, number.length - 3) + '.' + number.substring(number.length - 3 , number.length);
    }
    return number;
  }

  ngOnDestroy() {
    clearInterval(this.id);
  }
}
