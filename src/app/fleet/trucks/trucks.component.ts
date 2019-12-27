import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import {AddTruckDialogComponent} from './add-truck-dialog/add-truck-dialog.component';
import {AlertService} from '../../shared/services/alert.service';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';
  tableList:any;
  status=['Active','Inactive']
  filterToggle: boolean;
  toggleFilter() {
      this.filterToggle = !this.filterToggle;
    }
 
    public popoverTitle: string = '<b>Confirm Delete</b>';
    public popoverMessage: string = 'Are you sure you want Delete this truck details .?';
    public popoverStatusTitle: string = 'Confirm Status Change';
    public popoverStatusMessage: string = 'Are you sure you want to change status.?';
    public cancelClicked: boolean = false;

    constructor( public dialog:MatDialog, public alertService:AlertService ) { }

    ngOnInit() {
      this.tableList =[
        {truckid:'AR 89723',year:'2014',make:'Ashoke Leyland',model:'Ecomet1214',Registration:'AP 16 KS 1234',Chassis:'78AS4578',Engine:'HJ16985',Size:'12 X 20 X 15', status: true},
        {truckid:'TR 18798',year:'2015',make:'Mahindra & Mahindra',model:'Blaz0x55',Registration:'TS 07 ED 9991',Chassis:'AK56985',Engine:'TG56985',Size:'14 X 21 X 16',status:false},
        {truckid:'AP 45789',year:'2016',make:'Eicher Motors',model:'Eicher pro 5019',Registration:'MH 41 TD 1133 ',Chassis:'TGAS457',Engine:'KJ56985',Size:'10 X 18 X 14',status: true},
        {truckid:'DL 78455',year:'2017',make:'Volvo',model:'volvo FH16',Registration:'DL 06 DD 5335',Chassis:'KL12457i',Engine:'HG569856',Size:'16 X 22 X 18',status: false},
      ] 
    }
    public opentruckidDialog(id){
      let dialogRef =this.dialog.open(AddTruckDialogComponent,{
        data:id,
        height:'auto',
        width:'700px',
        autoFocus:true
      });
      dialogRef.afterClosed().subscribe(data=>{
  
  });
    }

    deletetruck(){
      this.alertService.createAlert('Successfully deleted.', 1);
      }

      piChart = new Chart({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'years'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
        },
        series: [{
          name: 'Lead',
          colorByPoint: true,
          data: [{
              name: 'Hot Lead',
              y: 61.41,
              sliced: true,
              selected: true
          }, {
              name: 'Warm Lead',
              y: 11.84
          }, {
              name: 'Cold Lead',
              y: 10.85
          }, {
              name: 'Not interested',
              y: 4.67
          }, {
              name: 'Interested',
              y: 4.18
          }, {
              name: 'Decline',
              y: 7.05
          }]
        }]
        });

        chart2 = new Chart({
        chart: {
          type: 'bar'
      },
      title: {
          text: 'Stacked bar chart'
      },
      xAxis: {
          categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total fruit consumption'
          }
      },
      legend: {
          reversed: true
      },
      plotOptions: {
          series: {
              stacking: 'normal'
          }
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }]
  });
  Chart3 =new Chart({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
colors: ['#50B432', '#89cff0', '#f26161', '#DDDF00', 'pink', 'red', '#FF9655', '#FFF263', '#6AF9C4'],
title: {
    text: 'Browser market shares in January, 2018'
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            connectorColor: 'silver'
        }
    }
},
series: [{
    name: 'Share',
    data: [
        { name: '2014', y: 49.41 },
        { name: '2015', y: 18.84 },
        { name: '2016', y: 10.85 },
        { name: '2017', y: 20.67 },
        // { name: '2018', y: 4.18 },
        // { name: 'Other', y: 7.05 }
    ]
}]
});
  

}
