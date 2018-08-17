import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-create',
  templateUrl: './jobs-create.component.html',
  styleUrls: ['./jobs-create.component.css']
})
export class JobsCreateComponent implements OnInit {
  jobTitle = '';
  jobDescription = '';
  companyName = '';
  employeerID = '';
  companySite = '';
  companyAddress = '';
  jobType = '';
  datePosted: Date = new Date;
  constructor() { }

  ngOnInit() {
  }
}
