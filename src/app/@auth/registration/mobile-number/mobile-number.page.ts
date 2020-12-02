import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js';

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.page.html',
  styleUrls: ['./mobile-number.page.scss'],
})
export class MobileNumberPage implements OnInit {
  mobileNumber = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private get mobileNumberWithPrefix() {
    if (!this.mobileNumber.startsWith('+63')) {
      const trimmedNumber = '+63' + this.mobileNumber;
      return trimmedNumber.replace(/\s/gi, '');
    }

    return '';
  }

  onChange() {
    const asYouType = new AsYouType();
    this.mobileNumber = asYouType.input(this.mobileNumberWithPrefix).replace('+63', '');
  }

  get isValid() {
    try {
      return parsePhoneNumberFromString(this.mobileNumberWithPrefix).isValid();
    } catch (error) {
      return false;
    }
  }

  onSubmit() {
    this.router.navigate([ '/otp-verification' ]);
  }
}
