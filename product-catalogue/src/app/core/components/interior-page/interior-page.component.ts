import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { getDayNightMode } from '../../store/core.selector';

@Component({
  selector: 'app-interior-page',
  templateUrl: './interior-page.component.html',
  styleUrls: ['./interior-page.component.scss']
})
export class InteriorPageComponent implements OnInit {
  @ViewChild('themeContainer', { static: false }) themeContainer: ElementRef;

  public dayNightMode$ = this.store.select(getDayNightMode);
  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dayNightMode$.subscribe(mode => {
      if (mode) {
        this.themeContainer.nativeElement.className = mode.mode ? 'theme-container dark' : 'theme-container light';
      }
    });
  }

}

