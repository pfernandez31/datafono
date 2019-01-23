import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-estadistica',
  templateUrl: 'estadistica.html',
})
export class EstadisticaPage {
  @ViewChild('lineChart') lineChart;
  @ViewChild('barChart') barChart;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public technologies: any = {
    "technologies" : [
                       {
                          'technology' : 'Contado',
                          'time'       : 50,
                          'color'      : 'rgba(206, 61, 95, 0.5)',
                          'hover'      : 'rgba(199, 108, 129, 0.5)'
                       },
                       {
                          'technology' : 'Credito',
                          'time'       : 15,
                          'color'      : 'rgba(83, 131, 185, 0.5)',
                          'hover'      : 'rgba(122, 160, 202, 0.5)'
                       },
                       {
                          'technology' : 'Tarjeta',
                          'time'       : 10,
                          'color'      : 'rgba(198, 147, 194, 0.5)',
                          'hover'      : 'rgba(200, 166, 197, 0.5)'
                       },
                       {
                          'technology' : 'Otros',
                          'time'       : 5,
                          'color'      : 'rgba(54, 116, 152, 0.5)',
                          'hover'      : 'rgba(103, 139, 160, 0.5)'
                       }
   ]
};
  public pieChartEl                : any;
  public chartLabels               : any    = [];
  public chartValues               : any    = [];
  public chartColours              : any    = [];
  public chartHoverColours         : any    = [];
  public chartLoading              : any;
  public lineChartEl               : any;
  public barChartEl                : any;


  ionViewDidLoad()
  {
  this.defineChartData();
  this.createBarChart();
  }

  defineChartData() : void
  {
  let k : any;

  for(k in this.technologies.technologies)
  {
    var tech = this.technologies.technologies[k];

    this.chartLabels.push(tech.technology);
    this.chartValues.push(tech.time);
    this.chartColours.push(tech.color);
    this.chartHoverColours.push(tech.hover);
  }
  }
  createBarChart()
{
   this.barChartEl = new Chart(this.barChart.nativeElement,
   {
      type: 'bar',
      data: {
         labels: this.chartLabels,
         datasets: [{
            label                 : 'ventas',
            data                  : this.chartValues,
            duration              : 1000,
            easing                : 'easeInQuart',
            backgroundColor       : this.chartColours,
            hoverBackgroundColor  : this.chartHoverColours
         }]
      },
      options : {
         maintainAspectRatio: false,
         legend         : {
            display     : true,
            boxWidth    : 40,
            fontSize    : 10,
            padding     : 0
         },
         scales: {
            yAxes: [{
               ticks: {
                  beginAtZero:true,
                  stepSize:3 ,
                  max : 50
               }
            }],
            xAxes: [{
               ticks: {
                  autoSkip: false
               }
            }]
         }
      }
   });
}
}
