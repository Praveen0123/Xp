import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppSettings } from '../../../../../../app.settings';
import { Settings } from '../../../../../../app.settings.model';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { AddAllergyComponent } from './add-allergy/add-allergy.component';

@Component({
  selector: 'app-handp-medications',
  templateUrl: './handp-medications.component.html',
  styleUrls: ['./handp-medications.component.scss']
})
export class HandpMedicationsComponent implements OnInit {

  tableList: any;
  medicationOrAllergy: any;
  public popoverTitle: string = 'Confirm Delete';
  public popoverMessage: string = 'Are you sure you want to delete this.?';
  public popoverStatusTitle: string = 'Confirm Status Change';
  public popoverStatusMessage: string = 'Are you sure you want to change status.?';
  public cancelClicked: boolean = false;

filterToggle: boolean;
toggleFilter() {
  this.filterToggle = !this.filterToggle;
}
public dateTime2: Date;
public dateTime3: Date;
status = ["Active","Incative"];
stepsOptionSelected: any;
onStepsOptionsSelected(event){

}

public searchText: string;
public page: any;
public settings: Settings;
constructor(public appSettings: AppSettings,
  public dialog: MatDialog) {
  this.settings = this.appSettings.settings;
}

ngOnInit() {
  this.tableList = [  
    {id:1 , medication:"Fabrice Vanegas" , sig:0 , dispense:0 , refills:0 , date:"05/24/2019"},
    {id:2 , medication:"Stephen McGill" , sig:0 , dispense:0 , refills:0 , date:"04/14/2016"},
    {id:3 , medication:"Otto Rieder" , sig:0 , dispense:0 , refills:0 , date:"12/01/2017"},
    {id:4 , medication:"Joe Deu-Ngoc" , sig:0 , dispense:0 , refills:0 , date:"01/31/2019"},
    {id:5 , medication:"Chris Soles" , sig:0 , dispense:0 , refills:0 , date:"08/26/2014"}
    ]
    this.medicationOrAllergy = "medications";
}

listNewClick(event, newValue) {
 this.medicationOrAllergy = newValue;
}


public openMedicationDialog(id) {
let dialogRef = this.dialog.open(AddMedicationComponent, {
    data: id,
    height: 'auto',
    width: '600px',
    autoFocus: false
});
dialogRef.afterClosed().subscribe(data => {
});
}

public openAllergyDialog(id) {
  let dialogRef = this.dialog.open(AddAllergyComponent, {
      data: id,
      height: 'auto',
      width: '600px',
      autoFocus: false
  });
  dialogRef.afterClosed().subscribe(data => {
  });
  }

deleteMedication(){
//this.alertService.createAlert('Successfully deleted.', 1);
}

}
