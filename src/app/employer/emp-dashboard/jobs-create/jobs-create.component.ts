import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {
  jobTitle: string = '';
  jobDescription: string = '';
  companyName: string = '';
  employeerID: string = '';
  companySite: string = '';
  companyAddress: string = '';
  jobType: string = '';
  datePosted: Date= new Date; 
  constructor() { }

  ngOnInit() {
  }
}
