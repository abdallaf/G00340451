import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IphonePage } from './iphone';

@NgModule({
  declarations: [
    IphonePage,
  ],
  imports: [
    IonicPageModule.forChild(IphonePage),
  ],
})
export class IphonePageModule {}
