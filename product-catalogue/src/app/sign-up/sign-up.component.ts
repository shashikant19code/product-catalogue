import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoreService } from '../core/service/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public userForm: FormGroup;
  public error = '';

  constructor(private coreService: CoreService, public router: Router) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobileNumber: new FormControl(Validators.required),
      address: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  /**
   * registerUser: Resister user within Application.
   */
  public registerUser(): void {
    const requestBody = Object.assign({}, this.userForm.value);
    delete requestBody.confirmPassword;
    this.coreService.registerUser(requestBody).subscribe(data => {
      if (data && data.accessToken) {
        localStorage.setItem('accessToken', data.accessToken);
        this.router.navigate(['home']);
      } else {
          this.error = data && data.errorResponse && data.errorResponse.error ? data.errorResponse.error : '';
          setTimeout(() => {
            this.error = '';
          }, 3000);
      }
    });
  }

}
