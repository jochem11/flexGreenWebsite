import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'node_modules/chart.js'
import zoomPlugin from 'chartjs-plugin-zoom';
import { ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import 'chartjs-adapter-moment';
import { LineController } from 'chart.js';
import { GlobalvarsService } from 'src/app/_services/globalvars.service';
import { environment } from '../../../../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DatePipe } from '@angular/common';

Chart.register(zoomPlugin);

let Actueelverbruik:Array<any> = [];
let Actueelteruglevering:Array<any> = [];
@Component({
  selector: 'app-p1_day-chart',
  templateUrl: './p1_day-chart.component.html',
  styleUrls: ['./p1_day-chart.component.scss']
})


export class P1_dayChartComponent implements OnInit{
  @ViewChild(BaseChartDirective)chart!: BaseChartDirective;
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  urlDate:string = this.datePipe.transform(new Date(), "yyyy-MM-dd")!;
  url: string = environment.apiUrl + 'v1/p1-poort/' + this.globalvars.chipID + '/current/?date=';
  errormsg : any;
  dataReady: boolean = false;
  myGroup:any;
  today: Date = new Date();



  constructor(private http : HttpClient,
              private globalvars : GlobalvarsService,
              private datePipe: DatePipe,) { }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      firstName: new FormControl()
    });
    this.getData();
  }

  changeDate(event: any) {
    this.urlDate = this.datePipe.transform(event.value, "yyyy-MM-dd")!
    this.getData();
  }



  getData() {
    Actueelverbruik.length = 0;
    Actueelteruglevering.length = 0;
    this.http.get(this.url + this.urlDate).subscribe({next: (data: any) => {

        for (let i of data) {
          let verbruik = {
            x: i.register_date,
            y: Number(i.mEAV)
          };
          let teruglevering = {
            x: i.register_date,
            y: Number(-i.mEAT)
          }
          Actueelverbruik.push(verbruik)
          Actueelteruglevering.push(teruglevering)
          this.dataReady = true;
        }
        this.data = {
          datasets: [
            {
              label: 'Actueel Verbruik',
              backgroundColor: 'rgba(255, 217, 0, 0.5)',
              data: Actueelverbruik,
              fill: true,
              borderColor: 'gold',
              hoverBackgroundColor: "gold",
              hoverBorderColor: "gold",
              pointBackgroundColor: 'gold',
              pointHoverRadius: 7,
              pointHoverBackgroundColor: 'gold',
            },
            {
              label: 'Actueel Teruglevering',
              data: Actueelteruglevering,
              fill: true,
              borderColor: '#39b54a',
              hoverBackgroundColor: "#39b54a",
              hoverBorderColor: "#39b54acc",
              pointBackgroundColor: '#39b54aad',
              pointHoverRadius: 7,
              pointHoverBackgroundColor: '#39b54a',
              backgroundColor: ['#39b54a1e','#39b54a63', '#39b54aad', '#39b54a' ]
            },
          ],
        };
        this.chartOptions = {
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
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
                    label += context.parsed.y + ' W';
                  }
                  return label;
                }
              }
            },
            title: {
              display: true,
              text: 'Verbruik + Teruglevering',
            },
            zoom: {
              limits: {

              },
              pan: {
                enabled: true,
                mode: 'x',
                modifierKey: 'ctrl',
              },
              zoom: {
                wheel: {
                  enabled: true
                },
                drag:{
                  enabled:true,
                  borderColor: 'rgb(54, 162, 235)',
                  borderWidth: 1,
                  backgroundColor: 'rgba(54, 162, 235, 0.3)',
                },
                pinch: {
                  enabled: true
                },
                mode: 'x'
              }
            },
          },
          scales: {
            y: {
              type: 'linear',
              beginAtZero: true,
              title: {
                display: true,
                text: 'values'
              },
              ticks: {
                callback: function(value, index, ticks) {
                  return value + ' W' ;
                }
              }
            },
            x: {

              type: 'time',
              min: this.urlDate + 'T00:00:00',
              max: this.urlDate + 'T23:59:59',
              time: {
                unit: 'minute',
                stepSize:30,
                displayFormats: {
                  hour: 'HH:mm',
                  minute: 'HH:mm',
                  second: 'HH:mm:ss'
                }
              },
              display: true,
              title: {
                display: true,
                text: 'time'
              },
              grid: {
                display: true
              },
            }
          }
        }
        this.chart.update();
      },
      error: (error: { message: any; }) => {
        this.errormsg = error.message;
        console.error('error: ', error)
      }
    })
  }
  data: ChartData<'line'> = {
    datasets: [
      {
        label: 'Actueel Verbruik',
        backgroundColor: 'rgba(255, 217, 0, 0.5)',
        data: Actueelverbruik,
        fill: true,
        borderColor: 'gold',
        hoverBackgroundColor: "gold",
        hoverBorderColor: "gold",
        pointBackgroundColor: 'gold',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: 'gold',
      },
      {
        label: 'Actueel Teruglevering',
        data: Actueelteruglevering,
        fill: true,
        borderColor: '#39b54a',
        hoverBackgroundColor: "#39b54a",
        hoverBorderColor: "#39b54acc",
        pointBackgroundColor: '#39b54aad',
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#39b54a',
        backgroundColor: ['#39b54a1e','#39b54a63', '#39b54aad', '#39b54a' ]
      },
    ],
  };
  chartOptions: ChartOptions = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
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
              label += context.parsed.y + ' kWh';
            }
            return label;
          }
        }
      },
      title: {
        display: true,
        text: 'Verbruik + Teruglevering',
      },
      zoom: {
        limits: {

        },
        pan: {
          enabled: true,
          mode: 'x',
          modifierKey: 'ctrl',
        },
        zoom: {
          wheel: {
            enabled: true
          },
          drag:{
            enabled:true,
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            backgroundColor: 'rgba(54, 162, 235, 0.3)',
          },
          pinch: {
            enabled: true
          },
          mode: 'x'
        }
      },
    },
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        title: {
          display: true,
          text: 'values'
        },
        ticks: {
          callback: function(value, index, ticks) {
            return value + ' kWh' ;
          }
        }
      },
      x: {

        type: 'time',
        min: this.urlDate + 'T00:00:00',
        max: this.urlDate + 'T23:59:59',
        time: {
          unit: 'minute',
          stepSize:30,
          displayFormats: {
            hour: 'HH:mm',
            minute: 'HH:mm',
            second: 'HH:mm:ss'
          }
        },
        display: true,
        title: {
          display: true,
          text: 'time'
        },
        grid: {
          display: true
        },
      }
    }
  };
  public barChartLegend = true;
}
