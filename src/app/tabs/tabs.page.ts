import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public modalCtrl: ModalController) {
    this.presentModal();
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: LoginPage
    });
    return await modal.present();
  }

}
