import { PopupModalsPage } from './popup-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// import { CommonModalPage } from './common-modal/common-modal';
// import { CommonModalPageModule } from './common-modal/common-modal.module';

@NgModule({
  declarations: [
    PopupModalsPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupModalsPage),
  ],
  exports: [
    PopupModalsPage
  ]
})

export class PopupModalPageModule { }
