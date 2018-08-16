import { of } from "rxjs/internal/observable/of";

import { EmpDashboardComponent } from "./emp-dashboard.component";

describe('EmpDashboardComponent', () => {
    let component: EmpDashboardComponent;
    let JOBS;
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