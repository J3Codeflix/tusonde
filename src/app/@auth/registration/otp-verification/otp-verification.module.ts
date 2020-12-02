import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgOtpInputModule } from 'ng-otp-input';

import { OtpVerificationPageRoutingModule } from './otp-verification-routing.module';
import { OtpVerificationPage } from './otp-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgOtpInputModule,
    OtpVerificationPageRoutingModule
  ],
  declarations: [OtpVerificationPage]
})
export class OtpVerificationPageModule {}
