import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AppSettings } from '../../../../app.settings';
import { Settings } from '../../../../app.settings.model';
import { Mail } from './mailbox.model';
import { MailboxService } from './mailbox.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss'],
  providers: [ MailboxService ]
})
export class MailboxComponent implements OnInit {

  @ViewChild('sidenav') sidenav: any;
  public settings: Settings;
  public sidenavOpen:boolean = true;
  public mails: Array<Mail>;
  public mail: Mail;
  public newMail: boolean;
  public type:string = 'all';
  public searchText: string;
  public form:FormGroup;

  constructor(public appSettings:AppSettings, 
              public formBuilder: FormBuilder, 
              public snackBar: MatSnackBar,
              private mailboxService:MailboxService) { 
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
    this.getMails();      
    if(window.innerWidth <= 992){
      this.sidenavOpen = false;
    }
    this.form = this.formBuilder.group({
      'to': ['', Validators.required],
      'cc': null,
      'subject': null,    
      'message': null
    });  
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth <= 992) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  public getMails(){
    switch (this.type) {
      case 'all': 
        this.mails = this.mailboxService.getAllMails();
        break;
      case 'starred':
        this.mails =  this.mailboxService.getStarredMails();
        break;
      case 'sent':
        this.mails =  this.mailboxService.getSentMails();
        break;
      case 'drafts':
        this.mails =  this.mailboxService.getDraftMails();
        break;
      case 'trash':
        this.mails =  this.mailboxService.getTrashMails();
        break;
      default:
        this.mails =  this.mailboxService.getDraftMails();
    }  
  }

  public viewDetail(mail){
    this.mail = this.mailboxService.getMail(mail.id);    
    this.mails.forEach(m => m.selected = false);
    this.mail.selected = true;
    this.mail.unread = false;
    this.newMail = false;
    if(window.innerWidth <= 992){
      this.sidenav.close(); 
    }
  }

  public compose(){
    this.mail = null;
    this.newMail = true;
  }

  public setAsRead(){
    this.mail.unread = false;
  }

  public setAsUnRead(){
    this.mail.unread = true;
  }

  public delete() {
    this.mail.trash = true;
    this.mail.sent = false;
    this.mail.draft = false; 
    this.mail.starred = false; 
    this.getMails();
    this.mail = null;
  }

  public changeStarStatus() {       
    this.mail.starred = !this.mail.starred;
    this.getMails(); 
  }

  public restore(){
    this.mail.trash = false;
    this.type = 'all';
    this.getMails();
    this.mail = null; 
  }

  public onSubmit(mail){
    if (this.form.valid) {
      this.snackBar.open('Mail sent to ' + mail.to + ' successfully!', null, {
        duration: 2000,
      });
      this.form.reset();     
    }
  }

}
