import { NavParams, ViewController, IonicPage } from 'ionic-angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-modal',
  templateUrl: 'common-modal.html'
})
export class CommonModalPage {
  constructor(public viewCtrl: ViewController) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
