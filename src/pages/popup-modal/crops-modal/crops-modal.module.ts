import { CropsModalPage } from './crops-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CommonModalPageModule } from '../common-modal/common-modal.module';

@NgModule({
  declarations: [
    CropsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CropsModalPage),
    CommonModalPageModule
  ],
  exports: [
    CropsModalPage
  ]
})

export class HintModalPageModule { }
