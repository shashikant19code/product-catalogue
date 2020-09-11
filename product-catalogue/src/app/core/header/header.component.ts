import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isShow = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    if (token) {
        this.isShow = true;
    }
  }

  /**
  * navigateTo: Go to the particular Route.
  */
  public navigateTo(tab): void {
    this.router.navigate([tab]);
  }

  /**
   * logout: Logout the user.
   */
  public logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['login']);
  }

}
