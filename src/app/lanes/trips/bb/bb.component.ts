import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BbComponent implements OnInit {

  tableList: any;

  imagePath="../../../../assets/img/vendor/leaflet/page_under_construction.png";

  constructor() { }

  ngOnInit() {
    this.tableList = [
      {orderId:"10214548" , customs:"55" , vehType:"Transport Vehicle" , value:17 , pickupDate:"24-12-2019" , pickupTime:"08:30" , deliverables:"50" ,  tat:"17" , status:"In Transit" , map:"" , network:"" , truck:"Tippo"}
    ]
  }

}
