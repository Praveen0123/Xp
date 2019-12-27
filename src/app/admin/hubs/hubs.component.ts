import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hubs',
  templateUrl: './hubs.component.html',
  styleUrls: ['./hubs.component.scss']
})
export class HubsComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';

  constructor() { }

  ngOnInit() {
  }

}
