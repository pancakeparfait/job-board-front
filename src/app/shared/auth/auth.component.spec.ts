import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { MaterialModule } from '../../material.module';
import { AuthService } from '../../auth.service';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let mockAuthService;

  beforeEach(async(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['logout'])
    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ AuthComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
