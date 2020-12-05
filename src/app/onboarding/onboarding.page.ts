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
      title: 'Tusonde Management',
      description: 'Create and manage your Tusonde. Don’t worry about it. It\'s fully secure.',
      image: './assets/images/onboarding/slide-1.svg'
    },
    {
      title: 'Share With Anyone',
      description: 'You can easily share the Tusonde you create to various social media and messaging platforms.',
      image: './assets/images/onboarding/slide-2.svg'
    },
    {
      title: 'Secure Payouts',
      description: 'Securing your payouts',
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
