import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides)
  ionSlides: IonSlides;

  activeSlideIndex = 0;

  slides = [
    {
      title: 'Secure Your Money',
      description: 'Add your credit card, bank details here to the transaction. Don’t worry about it. It\'s fully secure.',
      image: './assets/images/onboarding/slide-1.svg'
    },
    {
      title: 'Manage Everything',
      description: 'You can manage each and everything from here. Transfer money, get rewards, vouchers, and so much more.',
      image: './assets/images/onboarding/slide-2.svg'
    },
    {
      title: 'Safe Transaction',
      description: 'Transfer money account to account. Don’t share this id anywhere. Only you can manage your transaction.',
      image: './assets/images/onboarding/slide-3.svg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  async ionSlideDidChange() {
    this.activeSlideIndex = await this.ionSlides.getActiveIndex();
  }

  next() {
    this.ionSlides.slideNext();
  }

  isLastSlide(): boolean {
    const slideLastIndex = this.slides.length - 1;
    return this.activeSlideIndex === slideLastIndex;
  }
}
