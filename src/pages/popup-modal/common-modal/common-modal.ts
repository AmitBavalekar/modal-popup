import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

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
