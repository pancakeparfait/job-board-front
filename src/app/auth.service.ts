import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userType = '';
  sessionToken = 'test';

  constructor(private http: HttpClient, private _router: Router) { }

  hasToken() {
    if (this.sessionToken) {
      return true;
    } else {
      return false;
    }
  }

  employerUser() {
    this.userType = 'Employer';
  }

  studentUser() {
    this.userType = 'Student';
  }

  isStudent() {
    if (this.userType === 'Student') {
      return true;
    } else {
      return false;
    }
  }

  isEmployer() {
    if (this.userType === 'Employer') {
      return true;
    } else {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logine(email: string, password: string) {
    return this.http.post(`http://localhost:3000/employer/signin`, {employer: {email: email, password: password}} );
  }
  logins(email: string, password: string) {
    return this.http.post(`http://localhost:3000/student/signin`, {student: {email: email, password: password}} );
  }

  logout() {
    sessionStorage.removeItem('token');
    this._router.navigate(['/']);
  }

  signupe(employer) {
    return this.http
      .post(`http://localhost:3000/employer/create`,
      {
        employer: {
          first_name: employer.first_name,
          last_name: employer.last_name,
          email: employer.email,
          password: employer.password,
          confirmPass: employer.confirmPass,
          company_name: employer.company_name
        }
      });
  }

  signups(student) {
    return this.http
      .post(`http://localhost:3000/student/create`,
      {
        student: {
          first_name: student.first_name,
          last_name: student.last_name,
          email: student.email,
          password: student.password,
          confirmPass: student.confirmPass
        }
      });
  }




}






