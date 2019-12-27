import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';

  constructor() { }

  ngOnInit() {
  }

}
