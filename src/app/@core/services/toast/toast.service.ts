import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  async show(message: string, durationInSeconds: number = 5): Promise<HTMLIonToastElement> {
    try {
      const durationInMs: number = durationInSeconds * 1000;
  
      const toast: HTMLIonToastElement = await this.toastCtrl.create({
        message,
        duration: durationInMs,
        cssClass: 'custom-toast',
        position: 'bottom',
        buttons: [ 'OK' ]
      });
      await toast.present();
  
      return toast;
    } catch (error) {
      throw error;
    }
  }
}
