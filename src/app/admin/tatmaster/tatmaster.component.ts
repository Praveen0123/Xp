import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tatmaster',
  templateUrl: './tatmaster.component.html',
  styleUrls: ['./tatmaster.component.scss']
})
export class TatmasterComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';

  constructor() { }

  ngOnInit() {
  }

}
