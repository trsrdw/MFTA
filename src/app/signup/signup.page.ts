import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AccessProviders } from '../providers/access-providers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  conf_password: string = "";

  disabledButton;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accProv: AccessProviders
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  backbtn() {
    this.navCtrl.navigateBack('first');
  }

  async tryRegister() {
    if (this.firstname == "") {
      this.presentToast('First name is required');
    } else if (this.lastname == "") {
      this.presentToast('Last name is required');
    } else if (this.email == "") {
      this.presentToast('E-mail is required');
    } else if (this.password == "") {
      this.presentToast('Password is required');
    } else if (this.conf_password == "") {
      this.presentToast('Password does not match');
    } else {
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...',
      });
      loader.present();

      return new Promise(resolve => {
        let body = {
          aksi: 'proses_register',
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password
        }

        this.accProv.postData(body, 'api_process.php').subscribe((res:any) => {
          if (res.success == true) {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
            this.router.navigate(['login']);
          } else {
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
          }
        }, (err)=>{
          loader.dismiss();
          this.disabledButton = false;
          this.presentAlert('Timeout');
        }); 
      });
    }
  }

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  async presentAlert(a) {
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Close',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Try Again',
          handler: () => {
            this.tryRegister();
          }
        }
      ]
    });

    await alert.present();
  }

}
