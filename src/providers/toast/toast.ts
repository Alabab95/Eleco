import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
@Injectable()

export class ToastPage {
  constructor(public toastCtrl: ToastController) {
  }

  public presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}