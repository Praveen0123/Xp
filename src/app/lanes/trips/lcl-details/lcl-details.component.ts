import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lcl-details',
  templateUrl: './lcl-details.component.html',
  styleUrls: ['./lcl-details.component.scss']
})
export class LclDetailsComponent implements OnInit {

  tableList: any;

  constructor() { }

  ngOnInit() {
    this.tableList = [
      {refNumber:"10214548" , bookings:"55" , origin:"Chennai" , destination:"Banglore" , value:"25" , startDate:"24-12-2019" , startTime:"08:30" , tat:"" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"}
    ]
  }

}
