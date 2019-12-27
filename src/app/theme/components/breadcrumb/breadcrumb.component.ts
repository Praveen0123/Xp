import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, UrlSegment, NavigationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    
    public pageTitle: string;
    public moduleTitle: string;
    public subTitle: string = "test";
    public description: {};
    public breadcrumbs: {
        name: string;
        url: string
    }[] = [];
    
    public settings: Settings;
    constructor(public appSettings: AppSettings,
        public router: Router,
        public activatedRoute: ActivatedRoute,
        public title: Title) {
            this.settings = this.appSettings.settings;
            this.description = {
                'Fleet Dashboard':'Statistical data of the complete business can be represented here',
                "Dashboard": "The summary metrics, activity trends and alerts appear here.",
                "Analytics": {
                    "Customers":"sadasd",
                    "Fleet Vendors":"sadsad"
                },
                "Manage Users" : {
                    "Customers":"sadasd",
                    "Fleet Vendors":"sadsad"
                },
                "Admin" : {
                    "Profile":"This screen is used to manage profile",
                    "Preference":"This screen is used to manage preference"
                },
                "Transactions":{
                    "Invoice":"dgfdfg",
                    "Payments":"dfgdfg"
                },
                "Invoice":"All invoices can be managed here",
                "Payments":"All payments can be managed here",
                "Customers":"All the customer orders can be managed here",
                "Scheduling":"All schedules can be managed here",
                "Fleet Vendors":"All vendors can be managed here",
                "Capacity":"Capacity records can be managed here",
                "Profile":"This screen is used to manage profile",
                "Preference":"This screen is used to manage preference",
                "Orders":{
                    "FCL":"This screen is used to manage FCL",
                    "LCL":"This screen is used to manage LCL",
                    "BB":"This screen is used to manage BB"
                },
                "Trips":{
                    "FCL":"This screen is used to manage FCL",
                    "LCL":"This screen is used to manage LCL",
                    "BB":"This screen is used to manage BB",
                    "LCL Details":"This screen is used to view the details of individual lcl",
                    "Maps":"This page is used to locate the orders from different locations"
                },
                "Vendor Trips":"Vendor trips can be managed here",
                "Loads":"Vendor loads details can be managed  from this screen",
                "Vendor Payments":"Payments can bemanaged here",
                "Driver":"This Driver information can be managed from this screen.",
                "Lanes":"This page is used to manage lanes",
                "Trucks Information":"The Vehicle information can be managed from this screen",
                "Dashboards": "This is a summary dashboard of the entire system.vxcvxcvxvxvxc",
                "Alerts": "The alerts as reminders for the Marketing and Sales process can be viewed from here",
                'Manage Orders':'This page is used to manage all the patient orders',
                "Hubs":"dsfdsf",
                "Gateways":"sdfsdf",
                "Schedule":"sdfsdf",
                "TAT Master":"sdfsdf",
                "Barcodes":"sdfds",
                "Offers":"dsfsdf",
                "Settings":"sdfsdf",
                // 'Schedule':'This page is used to schedule appointments for patients',
                'Role Permissions':'This page is used to manage permissions of each role',
                // 'Patient Dashboard':'The detailed report of each patient is recorded here',
                
                'Visit Records':'Visit records for all patients are tracked here',
                'Incoming Order Queue':'Incoming orders from the chiropractors are integrated via EFAX system and can be captured/managed in this screen',
                'Manage Cases':'This screen gives the ability to add and manage the cases related to patients and all the patient data that  has been sent through HL 7 interface is recorded in this screen',
                'Manage Patients':'Patients and their related data are displayed and modified from this screen',
                'Manage Patient List':'Personal and Insurance information about patients can be managed here',
                'Permissions':'This page is used to manage permissions for each role',
                'Manage Schedules':'Patient visit schedules can be controlled here',
                'Text Log':{
                    'Incoming Messages':'Incoming messages are tracked from this screen',
                    'Outgoing Messages':'Outgoing messages are traced from this screen',
                },
                'Master Data':{
                    'Pharmacies' : 'Pharmacies are configured and can be managed from this screen',
                    'Imaging Partners' : 'Imaging Partners are configured and can be managed from this screen',
                    'Business Centres' : 'Business Centres are configured and can be managed from this screen',
                    'Clinical Categories' : 'Clinical Categories are configured and can be managed from this screen',
                    'Worklist Status' : 'Worklist status can be configured and managed from this screen',
                    'Visit Confirmation Status' : 'Visit confirmation status can be configured and managed from this screen',
                    'Claim Status' : 'Claim status can be configured and managed from this screen',
                    'CPT Codes' : 'List of CPT codes for all tests can be managed in this screen',
                    'ICD Codes' : 'List of ICD codes can be managed in this screen',
                    'Lookup Options' : 'Lookup Options can be configured and managed in this screen',
                    'Text Templates' : 'Templates for text messages are configured and managed in this screen',
                    'Email Templates' : 'Templates for email messages are configured and managed in this screen',
                    'Event Log' : 'Key events of the application are logged here along with user names and timestamps',
                    'Error Log' : 'The error logs are captured in the database and can be viewed from this screen',
                    'Appointment Codes' : 'List of Appointment codes can be configured and managed in this screen',
                    'Attorneys':'Attorney details can be managed from this screen',
                    'Imaging Codes':'Imaging codes can manage here'
                },
                'Email Log':'Log of all email messages sent out and received',
                'Users':'Users can be managed in this screen',
                'Availability Calendar':{
                    "Timings":{
                        'Grid View':'The physician availability can be managed in this screen and can update the work hours from actions column in the grid view',
                        'Calendar View':'The admin can have an overview of the physician availability in the form of calendar from this screen'
                    },
                    "Holidays":"Holidays can be set for each physician in this screen",
                    "Week-Offs":"Weekly off days can be set for each physician in this screen",
                    "Unavailable":"The time slots in which a phyisican is unavailable can be managed in this screen",
                    "Special Case":"This screen gives an ability to add and manage the worked hours of the Physicians due to emergency situations for different Business Centers during their Holidays / weekoffs"
                },
                'Manage Timings':'This screen is used to manage the timings information related to a particular location',
                'Text Template':'Templates for text messages are configured in this screen',
                'Email Template':'Email templates are configured in this screen',
                'Incoming Orders':'This screen is used to manage the list of incoming orders by  date range filter',
                'Patient Status':'The complete status of the patients list can be managed here',
                'Billing Status':'Billing status for all the patients till date can be viewed in this screen',
                'Incoming Referral':'This screen is used to manage the list of incoming orders by  date range filter',
                'Incoming Messages':'This screen is used view all the incoming messages from the intended recipients',
                'Outgoing Messages':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                'Patient Profile':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                'Patient Insurance':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                'Patient Tests':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                'Patient Docs':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                'Patient Prescreening':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                // 'Clinical Notes':'This screen is used view all the outgoing messages and send new messages to the intended recipients.',
                'Test Notes':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                'Activity Log':'This screen is used view all the outgoing messages and send new messages to the intended recipients',
                'Completed Appointments':'This page is used to generate reports for completed appointments',
                'Itemised Statements':'This screen provides the overview of patient visits made to the particular Business Centres',
                "Manage Collections":"Receivables from the attorneys can be tracked here",
                'Scheduled':{
                    'Grid View':'This screen gives the overview of the appointments that has been fixed for the patients and provides the ability to schedule the appointment from here as well. The Schedulers will confirm the appointment with the patients via Call, Text and Email from the dropdown provided in the Grid view',
                    'Calendar View':' This screen gives the overview of the scheduled and confirmed appointments of the patients and provides the feasibilty to schedule from the Calendar view as well' 
                },
                'Timings':{
                    'Grid View':'The physician availability can be managed in this screen and can update the work hours from actions column in the grid view',
                    'Calendar View':'The admin can have an overview of the physician availability in the form of calendar from this screen'
                },
                'Cancelled Claims':'This screens provides an overview of all claims that are cancelled',
                "Manage Visits":{
                    'Unscheduled':'This screen gives the ability to add the visits and schedule the appointment for the patients for that prescribed visit based on the Internal Physician timings and Appointment Codes that has been selected. As soon as the schedule made, the patiient lands into the Schedule Screen',
                    'Scheduled':{
                        'Grid View':'This screen gives the overview of the appointments that has been fixed for the patients and provides the ability to schedule the appointment from here as well. The Schedulers will confirm the appointment with the patients via Call, Text and Email from the dropdown provided in the Grid view',
                        'Calendar View':' This screen gives the overview of the scheduled and confirmed appointments of the patients and provides the feasibilty to schedule from the Calendar view as well' 
                    },
                    'Prescreening':'This screen gives the feasibility for the Medical Assistants to go through the predefined questionnaire based on the observations from the patient that helps the Internal Physicians to go through for further Diagnosis based on the Questionnaire',
                    
                    'Diagonsis':'This screen gives the feasibility to go through the Questionnaire that has been done by the MA and Internal Physician will record his/her observations by clicking on the hyperlink of that particular patient that leads to the Dashboard and can view the report that has been generated after diagnosis',
                    'Recommendations':'This screen gives an overview of the recommendations precribed by the physician to the patient which consists of Medications & Perscriptions, Physical Therapy / Chiropractic treatment, Pain management, Orthopedic consultation and ability to print out as well',
                    'Questionnaire':'This screen helps the MA to undergo the list of predefined questions based on the observations made on the patient',
                    'Billing':'Claims can be generated for particular patient from this screen',
                    'Chats':'This screen covers comprehensive log of all text messages that has been sent and received',
                    'Email':'This screen covers comprehensive log of all emails that has been sent and received',
                    'Create Claim':'This page is used to create claim for a patient based on the appointment codes'
                },
                "Patient Dashboard":{
                    'Patient Chart':'This tab gives the demographics info of the patient and provides the feasibility to update the details of the patient as well',
                    'Documents':'This screen gives the overview of all the documents that has been uploaded right from the visit made till diagnosis',
                },
                'Combined Notes':{
                    'Scheduling Notes':'This screen gives the ability to record the notes pertained to scheduling that captures the username, Date & Time and notes that has been recorded. Also records the scheduling notes that has been recorded in the Scheduling tab of Manage Visits Screen',
                    'Clinical Notes':'This screen gives the ability to record the notes pertained to Clinical that captures the username, Date & Time and notes that has been recorded. Also records the Clinical notes that has been recorded in the Diagnosis tab of Manage Visits Screen',
                    'Billing Notes':'This screen gives the ability to record the notes pertained to Billing that captures the username, Date & Time and notes that has been recorded. Also records the Billing notes that has been recorded in the Billing tab of Manage Visits Screen',
                },
                'Clinical Notes':{
                    'H&P':'This tab gives the feasibility to record the info as soon as the patient checkin by using the toggle based on the Physician observations and can be seen in a report format if recorded any',
                    'SOAP':'This tab gives the feasibility to record the info as soon as the patient checkin by using the toggle based on the Physician observations and can be seen in a report format if recorded any',
                    'Dr Goel Clinical Notes':'This tab gives the feasibility to diagnosis the patients and it is pertained to Dr Goel that gives the ability to generate the report as well'
                }
                
            };
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    this.breadcrumbs = [];
                    this.parseRoute(this.router.routerState.snapshot.root);
                    this.pageTitle = "";
                    this.breadcrumbs.forEach(breadcrumb => {
                        this.pageTitle += ' | ' + breadcrumb.name;
                    })
                    this.pageTitle ? null : this.pageTitle = " | Dashboard";
                    
                    var temp = this.pageTitle.split(' | ');
                    if (temp.length > 4) {
                        this.subTitle = temp.pop();
                        this.moduleTitle = temp[temp.length - 1];
                    } else if (temp.length > 3) {
                        this.subTitle = temp.pop();
                        this.moduleTitle = temp[temp.length - 1];
                    } else {
                        this.moduleTitle = temp.pop();
                    }
                    
                    if (this.subTitle === 'Permissions') {
                        this.moduleTitle = "Permissions";
                        this.subTitle = "test";
                    }
                    this.title.setTitle(this.settings.name + this.pageTitle);
                }
            })
        }
        
        private parseRoute(node: ActivatedRouteSnapshot) {
            if (node.data['breadcrumb']) {
                if (node.url.length) {
                    let urlSegments: UrlSegment[] = [];
                    node.pathFromRoot.forEach(routerState => {
                        urlSegments = urlSegments.concat(routerState.url);
                    });
                    let url = urlSegments.map(urlSegment => {
                        return urlSegment.path;
                    }).join('/');
                    this.breadcrumbs.push({
                        name: node.data['breadcrumb'],
                        url: '/' + url
                    })
                }
            }
            if (node.firstChild) {
                this.parseRoute(node.firstChild);
            }
        }
        
        public closeSubMenus() {
            let menu = document.querySelector(".sidenav-menu-outer");
            if (menu) {
                for (let i = 0; i < menu.children[0].children.length; i++) {
                    let child = menu.children[0].children[i];
                    if (child) {
                        if (child.children[0].classList.contains('expanded')) {
                            child.children[0].classList.remove('expanded');
                            child.children[1].classList.remove('show');
                        }
                    }
                }
            }
        }
    }
    
    
    