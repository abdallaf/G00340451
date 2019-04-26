import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SubmitPage} from '../submit/submit';
/**
 * Generated class for the HuaweiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-huawei',
  templateUrl: 'huawei.html',
})
export class HuaweiPage {
    //Variables
    public imei: string;
    public phoneModel: string;
    public networkProvider: string;
    public email: string;
    public comment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Submit(){
    console.log("IPHONE UNLOCKING");
    this.navCtrl.push(SubmitPage)
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HuaweiPage');
  }

}
