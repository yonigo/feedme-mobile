import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, protected ordersProdiver: OrdersProvider, protected alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  public createOrder() {
    this.ordersProdiver.createOrder().subscribe(order => {
      var alert = this.alertCtrl.create({
        title: 'Order Created!',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.navCtrl.setRoot('HomePage');
            }
          }
        ]
      });

      alert.present();      
    });
  }
}
