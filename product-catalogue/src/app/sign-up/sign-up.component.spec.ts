import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreService } from '../core/service/core.service';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';


describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let coreServiceMock: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      providers: [{
        provide: CoreService
      }]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
  }));

  beforeEach(() => {
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Test: ngOnInit', () => {
    it('should be create login form', () => {
      const userForm = {
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: 0,
        address: '',
        password: '',
        confirmPassword: '',
      };
      expect(component.userForm.value).toEqual(userForm);
    });
  });

  describe('Test: Register form', () => {
    it('should be invalid user form', () => {
      component.userForm.controls['firstName'].setValue('');
      component.userForm.controls['lastName'].setValue('');
      component.userForm.controls['email'].setValue('');
      component.userForm.controls['mobileNumber'].setValue(0);
      component.userForm.controls['address'].setValue('');
      component.userForm.controls['password'].setValue('');
      component.userForm.controls['confirmPassword'].setValue('');
      expect(component.userForm.valid).toBeFalsy();
    });

    it('should be invalid user form', () => {
      component.userForm.controls['firstName'].setValue('test_first');
      component.userForm.controls['lastName'].setValue('test_last');
      component.userForm.controls['email'].setValue('email@gmail.com');
      component.userForm.controls['mobileNumber'].setValue(8390499969);
      component.userForm.controls['address'].setValue('address');
      component.userForm.controls['password'].setValue('password');
      component.userForm.controls['confirmPassword'].setValue('password');
      expect(component.userForm.valid).toBeTruthy();
    });
  });

  describe('Test: registerUser()', () => {
    it('should not register the user', () => {
      component.userForm.controls['firstName'].setValue('');
      component.userForm.controls['lastName'].setValue('');
      component.userForm.controls['email'].setValue('');
      component.userForm.controls['mobileNumber'].setValue(0);
      component.userForm.controls['address'].setValue('');
      component.userForm.controls['password'].setValue('');
      component.userForm.controls['confirmPassword'].setValue('');
    });

    it('should register the user', () => {
      component.userForm.controls['firstName'].setValue('test_first');
      component.userForm.controls['lastName'].setValue('test_last');
      component.userForm.controls['email'].setValue('email@gmail.com');
      component.userForm.controls['mobileNumber'].setValue(8390499969);
      component.userForm.controls['address'].setValue('address');
      component.userForm.controls['password'].setValue('password');
      component.userForm.controls['confirmPassword'].setValue('password');
      expect(component.userForm.valid).toBeTruthy();
    });
  });
});
