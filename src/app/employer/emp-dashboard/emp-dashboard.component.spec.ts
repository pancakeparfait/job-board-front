import { of } from "rxjs/internal/observable/of";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Component, Directive } from "@angular/core";

import { EmpDashboardComponent } from "./emp-dashboard.component";
import { DataService } from "../../data.service";

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
    })
});

describe('EmpDashboardComponent (shallow tests)', () => {
    let fixture: ComponentFixture<EmpDashboardComponent>;
    let mockDataService;

    @Component({
        selector: 'mat-card',
        template: `<div></div>`
    })
    class FakeMatCard { }

    @Component({
        selector: 'mat-card-title',
        template: `<div></div>`
    })
    class FakeMatCardTitle { }

    @Directive({
        selector: '[routerLink]'
    })
    class FakeRouterLinkDirective { }

    beforeEach(() => {
        mockDataService = jasmine.createSpyObj('DataService', ['getJobs'])
        mockDataService.getJobs.and.returnValue(of([]));

        TestBed.configureTestingModule({
            declarations: [
                EmpDashboardComponent,
                FakeMatCard,
                FakeMatCardTitle,
                FakeRouterLinkDirective
            ],
            providers: [
                { provide: DataService, useValue: mockDataService }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(EmpDashboardComponent);
    });

    it('calls dataService.getJobs()', () => {
        fixture.detectChanges();

        expect(mockDataService.getJobs).toHaveBeenCalled();
    });
});