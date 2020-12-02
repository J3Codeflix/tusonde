import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {
  otp = '';
  otpConfig = {
    length: 5,
    allowNumbersOnly: true,
    disableAutoFocus: false,
    inputStyles: {
      'border-radius': 'none'
    },
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }

  get isValid() {
    return this.otp.length === this.otpConfig.length;
  }

  onSubmit() {
    console.log('OtpVerificationPage -> onSubmit -> onSubmit');
    this.router.navigate([ '/registration-form' ]);
  }
}
