import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { SetDayNightMode } from '../store/core.action';
import { getDayNightMode } from './../store/core.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isShow = false;
  public dayNightMode$ = this.store.select(getDayNightMode);
  public isModeChecked: any;

  constructor(public router: Router, public store: Store<AppState>) { }

  ngOnInit(): void {
    this.dayNightMode$.subscribe(mode => {
      if (mode) {
        this.isModeChecked = mode.mode;
      }
    });
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

  /**
   * onCheckNightMode($event): Turn on the night mode if checkbox is checked.
   */
  public onCheckNightMode(event) {
    this.store.dispatch(new SetDayNightMode({
      mode: event.target.checked
    }));
  }
}
