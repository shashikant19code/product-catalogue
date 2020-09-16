// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { InteriorPageComponent } from './interior-page.component';

// describe('InteriorPageComponent', () => {
//   let component: InteriorPageComponent;
//   let fixture: ComponentFixture<InteriorPageComponent>;
//   it('should create', () => {
//     console.log("test");
//   });
//   // beforeEach(async(() => {
//   //   TestBed.configureTestingModule({
//   //     declarations: [ InteriorPageComponent ]
//   //   })
//   //   .compileComponents();
//   // }));

//   // beforeEach(() => {
//   //   fixture = TestBed.createComponent(InteriorPageComponent);
//   //   component = fixture.componentInstance;
//   //   fixture.detectChanges();
//   // });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
// });

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InteriorPageComponent } from './interior-page.component';
import { HeaderComponent } from '../../header/header.component';

describe('InteriorPageComponent', () => {
    let component: InteriorPageComponent;
    let fixture: ComponentFixture<InteriorPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InteriorPageComponent,HeaderComponent],
            providers: [
            ],
            imports: [RouterTestingModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InteriorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

