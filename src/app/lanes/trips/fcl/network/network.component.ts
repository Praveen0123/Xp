import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NetworkComponent>,@Inject(MAT_DIALOG_DATA) public networkDetails: any) { }

  ngOnInit() {
    console.log(this.networkDetails);
  }

  close(): void {
    this.dialogRef.close();
  }

}
