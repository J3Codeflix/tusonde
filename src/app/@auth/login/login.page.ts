import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {
    this.form = this.formBuilder.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    });
  }

  ngOnInit() {
  }

  get passwordInputType(): string {
    if (this.showPassword) {
      return 'text';
    }

    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  async onSubmit() {
    try {
      const form = this.form.value;
      await this.authService.login(form.email, form.password);
      this.router.navigate([ 'tabs' ]);
    } catch (error) {
      console.log('🚀 ~ file: login.page.ts ~ line 46 ~ LoginPage ~ onSubmit ~ error', error);
    }
  }
}
