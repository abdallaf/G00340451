import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HuaweiPage } from './huawei';

@NgModule({
  declarations: [
    HuaweiPage,
  ],
  imports: [
    IonicPageModule.forChild(HuaweiPage),
  ],
})
export class HuaweiPageModule {}
