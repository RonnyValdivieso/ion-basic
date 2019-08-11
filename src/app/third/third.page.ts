import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToHome() {
    this.navCtrl.navigateRoot('/');
  }
}
