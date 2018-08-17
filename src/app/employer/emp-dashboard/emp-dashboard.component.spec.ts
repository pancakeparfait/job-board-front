import { of } from 'rxjs/internal/observable/of';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, Directive, Input } from '@angular/core';

import { EmpDashboardComponent } from './emp-dashboard.component';
import { DataService } from '../../data.service';
import { MaterialModule } from '../../material.module';

describe('EmpDashboardComponent (unit tests)', () => {
    let component: EmpDashboardComponent;
    let mockDataService;

    beforeEach(() => {
        mockDataService = jasmine.createSpyObj('dataService', ['getJobs']);
        mockDataService.getJobs.and.returnValue(of(true));

        component = new EmpDashboardComponent(mockDataService);
    });

    describe('.ngOnInit()', () => {

        beforeEach(() => {
            component.ngOnInit();
        });

        it('calls dataService.getJobs()', () => {
            expect(mockDataService.getJobs).toHaveBeenCalled();
        });
    });
});

describe('EmpDashboardComponent (shallow tests)', () => {
    let fixture: ComponentFixture<EmpDashboardComponent>;
    let mockDataService;

    @Directive({
        selector: '[routerLink]',
        host: { '(click)': 'onClick()' }
    })
    class StubRouterLinkDirective {
        @Input() routerlink: string;
        navigatedTo: any = null;

        onClick() {
            this.navigatedTo = this.routerlink;
        }
    }

    @Component({
        selector: 'app-job-details',
        template: `<div></div>`
    })
    class FakeJobDetailsComponent { }

    @Component({
        selector: 'app-jobs-create',
        template: `<div></div>`
    })
    class FakeJobsCreateComponent { }

    beforeEach(() => {
        mockDataService = jasmine.createSpyObj('DataService', ['getJobs']);
        mockDataService.getJobs.and.returnValue(of([]));

        TestBed.configureTestingModule({
            imports: [
                MaterialModule
            ],
            declarations: [
                EmpDashboardComponent,
                StubRouterLinkDirective,
                FakeJobDetailsComponent,
                FakeJobsCreateComponent
            ],
            providers: [
                { provide: DataService, useValue: mockDataService }
            ]
        });
        fixture = TestBed.createComponent(EmpDashboardComponent);
    });

    it('calls dataService.getJobs()', () => {
        fixture.detectChanges();

        expect(mockDataService.getJobs).toHaveBeenCalled();
    });
});
