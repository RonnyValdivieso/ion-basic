import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: ActivatedRoute, private navCtrl: NavController,
              public modalCtrl: ModalController, public authService: AuthService) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.authService.loginWithFacebook()
      .then((response) => {
        alert("Inicio de sesión exitoso.");
        this.modalCtrl.dismiss();
        localStorage.setItem('loginData', JSON.stringify(response));
      })
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
