import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { CoreService } from '../core/service/core.service';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let coreServiceMock: CoreService;
  let service: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule,HttpClientTestingModule],
      providers: [ CoreService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture.detectChanges();
    // service = TestBed.get(coreServiceMock);
    // console.log(service);
    component.ngOnInit();
  });

  // it('should select preferences$ from the store with undefined', () => {
  //   component.ngOnInit();
  //   const spy = jest.fn();
  //   expect(spy).toHaveBeenCalledWith({});
  // });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Test: ngOnInit', () => {
    it('should be create login form', () => {
      const loginform = {
        email: '',
        password: ''
      };
      expect(component.loginForm.value).toEqual(loginform);
    });
  });

  describe('Test: Login form', () => {
    it('should be invalid login form', () => {
      component.loginForm.controls['email'].setValue('');
      component.loginForm.controls['password'].setValue('');
      expect(component.loginForm.valid).toBeFalsy();
    });

    it('should be invalid login form', () => {
      component.loginForm.controls['email'].setValue('test@apptware.com');
      component.loginForm.controls['password'].setValue('test123');
      expect(component.loginForm.valid).toBeTruthy();
    });
  });

  describe('Test: login()', () => {
    it('should not login the user', () => {
      component.loginForm.controls['email'].setValue('');
      component.loginForm.controls['password'].setValue('');

    });

    it('should login the user', () => {
      component.loginForm.controls['email'].setValue('test@apptware.com');
      component.loginForm.controls['password'].setValue('test123');
      expect(component.loginForm.valid).toBeTruthy();
    });
  });

  // it('should create', () => {
  //   console.log("test");
  // });

});
