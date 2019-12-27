import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dcl',
  templateUrl: './dcl.component.html',
  styleUrls: ['./dcl.component.scss']
})
export class DclComponent implements OnInit {

  imagePath="../../../../assets/img/vendor/leaflet/page_under_construction.png";
  tableList:any;

  constructor() { }

  ngOnInit() {
    this.tableList = [
      {refNumber:"10214548" , bookings:"55" , origin:"Chennai" , destination:"Banglore" , value:"25" , startDate:"24-12-2019" , startTime:"08:30" , tat:"" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"}
    ]
  }

}
