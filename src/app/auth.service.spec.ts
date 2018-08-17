import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let controller: HttpTestingController;
  let fakeRouter;

  beforeEach(() => {
    fakeRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        AuthService,
        { provide: Router, useValue: fakeRouter }
      ]
    });

    service = TestBed.get(AuthService);
    controller = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.logine()', () => {

    beforeEach(() =>{

    });

    it('calls post with the correct url', () => {
      const email: string = 'email@test.com';
      const password: string = 'passw0rd';

      service.logine(email, password).subscribe();

      const req = controller.expectOne('http://localhost:3000/employer/signin');
      req.flush({ });
      controller.verify();
    });
  });
});
