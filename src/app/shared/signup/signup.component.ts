import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    password: '',
    confirmPass: ''
  };
  token: any;

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  Signupe () {
    this.authService.signupe(this.user).subscribe((res: any) => {
      this.token = res.sessionToken;
      sessionStorage.setItem('token', this.token);
      this._router.navigate(['/jobposts']);
    },
    err => console.log(err)
    );
  }

  Signups () {
    this.authService.signups(this.user).subscribe ( (res: any) => {
      this.token = res.sessionToken;
      sessionStorage.setItem('token', this.token);
      this._router.navigate(['/jobposts']);
    },
    err => console.log(err)
    );
  }
}
