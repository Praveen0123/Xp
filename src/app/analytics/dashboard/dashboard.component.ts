import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public settings: Settings;
  public filterToggle : boolean;
  constructor(public appSettings:AppSettings){
    this.settings = this.appSettings.settings; 
    
  }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  ngOnInit() { 
    this.filterToggle = false;
  }
  
// myform: FormGroup;
projectOptions = ["Port Area Initiative", "Basement Flooding", "Dome Scanning", "Culvert Topographic", "Bridge Topographic","Town House Foundation"];
projectOptionSelected: any;
onprojectptionsSelected(event) {
  
}
siteOptions = ["MISS201905123", "MISS202684235", "MISS202612598", "MISS202758926"];
siteOptionSelected: any;
onsiteOptionsSelected(event) {
  
}
regionOptions = ["Cordillera", "Prairies", "North", "Canadian Shield", "St. Lawrence River","Atlantic","Great Lakes"];
regionOptionSelected: any;
onregionOptionsSelected(event) {
 
}
cityOptions = ["Vancouver", "Ottawa", "Regina", "Toronto", "Charlottetown", "Edmonton ", "Fredericton "];
cityOptionSelected: any;
oncityOptionsSelected(event) {
 
}
roleOptions = ['Project Manager', 'Production Team', 'Project Admin', 'Administration', 'Field Staff', 'CAD Staff', 'Finance'];
roleOptionSelected: any;

onroleOptionsSelected(event) {
  
}
staffOptions = ["Dwayne", "Dave", "Emily", "Joe", "Kate", "Scott", "Ryan", "Chris", "Justin", "Ken", "Dan", "Tony", "Stephanie", "Laurie"];
staffOptionSelected: any;

onstaffOptionsSelected(event) {
  
}
projectstageOptions = ["Initiated", "Completed", "InProcess", "Pending"];
projectstageOptionSelected: any;

onprojectstageOptionsSelected(event) {
 
}
billingstatusOptions = ["Paid", "Overdue", "Pending"];
billingstatusOptionSelected: any;

onbillingstatusOptionsSelected(event) {
  
}
archivalstatusOptions = ["Date"];
archivalstatusOptionSelected: any;

onarchivalstatusOptionsSelected(event) {

}

}
