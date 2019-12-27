import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcodes',
  templateUrl: './barcodes.component.html',
  styleUrls: ['./barcodes.component.scss']
})
export class BarcodesComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';

  constructor() { }

  ngOnInit() {
  }

}
