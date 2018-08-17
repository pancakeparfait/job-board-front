import { EmployerModule } from './employer.module';
 describe('EmployersModule', () => {
  let employerModule: EmployerModule;
   beforeEach(() => {
    employerModule = new EmployerModule();
  });
   it('should create an instance', () => {
    expect(employerModule).toBeTruthy();
  });
});
