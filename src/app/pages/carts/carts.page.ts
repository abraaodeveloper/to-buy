import { CartInterface } from './../../util/interface/CartInterface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Cart } from 'src/app/util/models/Cart';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.page.html',
  styleUrls: ['./carts.page.scss'],
})
export class CartsPage implements OnInit {

  carts: CartInterface[] = [];

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.carts = this.cartService.getAll();
  }

  async addCart() {
    const alert = await this.alertController.create({
      inputs: [
        { name: 'name', type: 'text', placeholder: 'Name' },
        { name: 'description', type: 'textarea', placeholder: 'Description' }
      ],
      header: 'New Cart',
      buttons: [
        { text: 'Cancel', role: 'cancel', handler: () => { } },
        {
          text: 'Ok',
          handler: (data) => {
            let nCart = data.date ? new Cart(data.name, data.description, data.date)
              : new Cart(data.name, data.description, null);
            this.cartService.create(nCart);
            this.carts = this.cartService.getAll();
          }
        }
      ]
    });
    await alert.present();
  }

  async updateCart(cart: CartInterface) {
    const alert = await this.alertController.create({
      inputs: [
        { name: 'name', type: 'text', value: cart.name },
        { name: 'description', type: 'textarea', value: cart.description }
      ],
      header: 'Update Cart',
      buttons: [
        { text: 'Cancel', role: 'cancel', handler: () => { } },
        {
          text: 'Ok',
          handler: (data) => {
            cart.name = data.name;
            cart.description = data.description;
            this.cartService.update(cart);
            this.carts = this.cartService.getAll();
          }
        }
      ]
    });
    await alert.present();
  }

  async deleteById(id: number) {
    this.cartService.deleteById(id);
    this.carts = this.cartService.getAll();
  }
}
