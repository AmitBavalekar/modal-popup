import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicModule } from 'ionic-angular';

import { CommonModalPage } from './common-modal';

@NgModule({
  declarations: [
    CommonModalPage,
  ],
  imports: [
  	IonicModule
  ],
  exports: [
    CommonModalPage
  ]
})

export class CommonModalPageModule { }
