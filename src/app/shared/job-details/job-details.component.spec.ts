import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsComponent } from './job-details.component';
import { MatDialog } from '../../../../node_modules/@angular/material';

describe('JobDetailsComponent', () => {
  let component: JobDetailsComponent;
  let fixture: ComponentFixture<JobDetailsComponent>;
  let mockMatDialog;

  beforeEach(async(() => {
    mockMatDialog = jasmine.createSpyObj('MatDialog', ['open'])

    TestBed.configureTestingModule({
      declarations: [ JobDetailsComponent ],
      providers:[
        { provide: MatDialog, useValue: mockMatDialog }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
