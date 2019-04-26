import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SamsungPage} from '../samsung/samsung';
import {IphonePage} from '../iphone/iphone';
import {HtcPage} from '../htc/htc';
import {HuaweiPage} from '../huawei/huawei';
import {AlcatelPage} from '../alcatel/alcatel';
/**
 * Generated class for the ModelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-models',
  templateUrl: 'models.html',
})
export class ModelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  Samsung(){
    console.log("SAMSUNG UNLOCKING");
    this.navCtrl.push(SamsungPage)
  }

  Iphone(){
    console.log("IPHONE UNLOCKING");
    this.navCtrl.push(IphonePage)
  }

  Htc(){
    console.log("HTC UNLOCKING");
    this.navCtrl.push(HtcPage)
  }

  Huawei(){
    console.log("HUAWEI UNLOCKING");
    this.navCtrl.push(HuaweiPage)
  }

  Alcatel(){
    console.log("ALCATEL UNLOCKING");
    this.navCtrl.push(AlcatelPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelsPage');
  }

}
