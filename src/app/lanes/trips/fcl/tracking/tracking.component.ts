import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TrackingComponent>,@Inject(MAT_DIALOG_DATA) public trackingDetails: any) { }

  ngOnInit() {
    console.log(this.trackingDetails);
  }

  close(): void {
    this.dialogRef.close();
  }

}
