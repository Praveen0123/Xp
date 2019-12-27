import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imagePath = '../../../assets/img/vendor/leaflet/page_under_construction.png';

  constructor() { }

  ngOnInit() {
  }

}
