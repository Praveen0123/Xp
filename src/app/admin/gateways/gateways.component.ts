import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateways',
  templateUrl: './gateways.component.html',
  styleUrls: ['./gateways.component.scss']
})
export class GatewaysComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';

  constructor() { }

  ngOnInit() {
  }

}
