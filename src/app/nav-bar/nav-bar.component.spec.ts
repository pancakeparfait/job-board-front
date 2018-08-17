import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { MaterialModule } from '../material.module';
import { AuthService } from '../auth.service';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let mockAuthService;

  beforeEach(async(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['hasToken', 'isStudent', 'logout']);

    TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ NavBarComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
