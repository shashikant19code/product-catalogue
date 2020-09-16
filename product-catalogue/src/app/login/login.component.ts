import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CoreService } from '../core/service/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public error = '';

  constructor(public coreService: CoreService, public router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  /**
   * Login: Login with user.
   */
  public login(): void {
    const requestBody = Object.assign({}, this.loginForm.value);
    console.log(this.coreService);
    this.coreService.login(requestBody).subscribe(data => {
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

  /**
   * signUp: Navigate to signup page.
   */
  public signUp() {
    this.router.navigate(['sign-up']);
  }

}
