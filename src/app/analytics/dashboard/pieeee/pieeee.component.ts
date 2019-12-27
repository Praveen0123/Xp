import { Component } from '@angular/core';
import { multiple} from '../pie.data';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
  selector: 'app-pieeee',
  templateUrl: './pieeee.component.html'
})
export class PieeeeComponent {
  public multiple: any[];
  public multi: any[];
  public showLegend = true;
  public gradient = true;
  public colorScheme = {
    domain: ['#2F3E9E', '#D22E2E', '#378D3B', '#0096A6', '#F47B00', '#606060']
  }; 
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;
  public settings: Settings;

  constructor(public appSettings:AppSettings) {
    this.settings = this.appSettings.settings; 
    Object.assign(this, {multiple}); 
  }
  
  public onSelect(event) {
    console.log(event);
  }

}