import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  showEmpDash() {
    if (this.auth.hasToken() && !this.auth.isStudent()) {
      return true;
    } else {
      return false;
    }
  }

  logout () {
    this.auth.logout();
  }
}
