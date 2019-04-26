import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ModelsPage} from '../models/models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToModelsPage(){
    console.log("Go to scond page");
    this.navCtrl.push(ModelsPage)
  }

}
