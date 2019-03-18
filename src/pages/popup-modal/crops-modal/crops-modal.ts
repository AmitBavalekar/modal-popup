import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-crops-modal',
  templateUrl: 'crops-modal.html'
})
export class CropsModalPage {
  myParam: string;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams
  ) {
    this.myParam = params.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
