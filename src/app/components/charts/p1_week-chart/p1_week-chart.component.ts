import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import {Chart} from 'node_modules/chart.js'
import { ChartData, ChartOptions } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import 'chartjs-adapter-moment';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import { GlobalvarsService } from 'src/app/_services/globalvars.service';
import { environment } from '../../../../environments/environment'
import { FormGroup, FormControl } from '@angular/forms';
import {MatDateRangeSelectionStrategy, DateRange, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';

let verbruik:Array<number> = [];
let teruglevering:Array<number> = [];
let verschil:Array<number> = [];
let colors:Array<string> = [];


@Injectable()
export class WeekSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createCurrentWeekRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createCurrentWeekRange(activeDate);
  }

  private _createCurrentWeekRange(date: D | null): DateRange<D> {
    if (date) {
      const dow = this._dateAdapter.getDayOfWeek(date);
      const first = this._dateAdapter.getFirstDayOfWeek();
      const start = this._dateAdapter.addCalendarDays(date, -(dow + 7 - first) % 7);
      const end = this._dateAdapter.addCalendarDays(start, 6);
      return new DateRange<D>(start, end);
    }
    return new DateRange<D>(null, null);
  }
}


@Component({
  selector: 'app-p1_week-chart',
  templateUrl: './p1_week-chart.component.html',
  styleUrls: ['./p1_week-chart.component.scss'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: WeekSelectionStrategy,
    },
  ]
})
export class P1_weekChartComponent implements OnInit{
  @ViewChild(BaseChartDirective)chart!: BaseChartDirective;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  url: string = environment.apiUrl + 'v1/p1-poort/' + this.globalvars.chipID + '/rates/?type=week&date=';
  errormsg : any;
  dataReady : boolean = false;
  myGroup:any;
  today:Date = new Date;
  year_week: string = this.datePipe.transform(this.today.setDate(this.today.getDate() - (this.today.getDay() - 1)), "yyyy-w")!;
  max_input: Date = new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 7))

  constructor (private http: HttpClient, private globalvars : GlobalvarsService, private datePipe: DatePipe) {}
  ngOnInit():void {
    console.log(this.year_week)
    this.myGroup = new FormGroup({
      firstName: new FormControl()
    });
    this.dataReady = false;
    this.getData();
  }

  pickerForm = new FormGroup({
    start: new FormControl(new Date(this.today.setDate(this.today.getDate() - (this.today.getDay() - 1)))),
    end: new FormControl(new Date(this.today.setDate(this.today.getDate() - this.today.getDay() + 7)))
  })

  dateChange(event: MatDatepickerInputEvent<Date>) {
    this.year_week = this.datePipe.transform(event.value, 'yyyy-w')!;
    console.log(this.datePipe.transform(event.value, 'yyyy-w'));
    this.getData();
  }
  getData():void {
    this.http.get(this.url + this.year_week).subscribe({next: (data: any) => {
        console.log(data)
        verbruik.length = 0;
        teruglevering.length = 0;
        verschil.length = 0;
        colors.length = 0;
        let index = 0;
        let verbruikGister:any;
        let verbruikVandaag:any;
        let terugGister:any;
        let terugVandaag:any;
        let verschil1:any;
        for(let i of data) {
          if (index === 0) {
            verbruikGister = parseFloat(i.mEVHT) + parseFloat(i.mEVLT);
            terugGister = parseFloat(i.mETHT) + parseFloat(i.mETLT);
          } else {
            verbruikVandaag = parseFloat(i.mEVHT) + parseFloat(i.mEVLT);
            terugVandaag = parseFloat(i.mETHT) + parseFloat(i.mETLT);
            verbruik.push(verbruikVandaag - verbruikGister);
            teruglevering.push(terugVandaag - terugGister);
            verschil1 = (terugGister - terugVandaag) - (verbruikGister - verbruikVandaag) ;
            if (verschil1 < 0) {
              verschil1 *= -1;
              colors.push('#0000ff88');
            } else {
              colors.push('rgba(255, 0, 0, 0.5)');
            }
            verschil.push(verschil1);
            verbruikGister = parseFloat(i.mEVHT) + parseFloat(i.mEVLT);
            terugGister = parseFloat(i.mETHT) + parseFloat(i.mETLT);
          }
          index ++;

        }
        if (this.dataReady) {
          this.chart.update();
        }
        this.dataReady = true;

      },
      error: (error: {message:any}) => {
        this.errormsg = error.message;
        console.error('error: ', error)
      }
    })
  }
  data: ChartData<'bar'> = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'verbruik',
        data: verbruik,
        backgroundColor: 'rgba(255, 217, 0, 0.5)',
        borderColor: 'gold',
      },
      {
        label: 'teruglevering',
        data: teruglevering,
        backgroundColor: '#39b54a63',
        borderColor: '#39b54a',
      },
      {
        label: 'verschil',
        data: verschil,
        backgroundColor: colors,
        borderColor: colors
      }
    ]
  };
  chartOptions: ChartOptions = {
    interaction: {
      mode: 'index',
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(3) + ' kW';
            }
            return label;
          }
        }
      },
      title: {
        display: true,
        text: 'Verbruik + Teruglevering',
      },
    },
  };
  public barChartLegend = true;
}
