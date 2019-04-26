import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubmitPage page.
 
 */

@IonicPage()
@Component({
  selector: 'page-submit',
  templateUrl: 'submit.html',
})
export class SubmitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubmitPage');
  }

}
