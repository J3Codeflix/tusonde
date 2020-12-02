import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.page.html',
  styleUrls: ['./registration-form.page.scss'],
})
export class RegistrationFormPage implements OnInit {
  maxDate: string = null;

  constructor(private navCtrl: NavController) {
    const maxYear = new Date().getFullYear() - 19;
    this.maxDate = `${maxYear}-12-31`;
    console.log('RegistrationFormPage -> constructor -> this.maxDate', this.maxDate);
  }

  ngOnInit() {
  }


  onSubmit() {
    console.log('RegistrationFormPage -> onSubmit -> onSubmit');
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  get isValid() {
    return true;
  }
}
