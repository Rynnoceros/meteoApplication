import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from './forecast';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() forecast:Forecast; 

  lineChartData:Array<any> = [
    {
      data:[],
      label:""
    }
  ]

  lineChartLabels: Array<any> = [];
  lineChartOptions:any = {
    responsive: true
  };

  lineChartLegend:boolean = true;
  lineChartType:string = 'line';

  constructor() { 
    
  }

  ngOnInit() {
  }

}
