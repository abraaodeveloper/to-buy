import { CRUDInterface } from './../util/interface/CRUDInterface';
import { Injectable } from '@angular/core';

import { DbService } from 'src/app/services/db.service';
import { CartInterface } from 'src/app/util/interface/CartInterface';

import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Toast } from '../util/ui/toast';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CartService implements CRUDInterface {

  private dbInstance: SQLiteObject = null;
  private toasts: Toast;

  constructor(private dbService: DbService, private toastController: ToastController) {
    this.toasts = new Toast(toastController);
    dbService.getDB().then(db => {
      this.dbInstance = db;
    }).catch(e => console.log(e));
  }

  create(cart: CartInterface) {
    this.dbInstance.executeSql('insert into CARTS(name, description, date) VALUES(?, ?, ?)',
      [cart.name, cart.description, cart.date])
      .catch(e => {
        this.toasts.info("an error has occurred");
        return false;
      });
    return true;
  }

  getAll() {
    let carts: CartInterface[] = [];
    this.dbInstance.executeSql('select * from CARTS', []).then(
      (res) => {
        for (var x = 0; x < res.rows.length; x++)
          carts.push(res.rows.item(x));
      }
    ).catch(e => {
      this.toasts.info("an error has occurred");
    });
    return carts;
  }

  getById(id: number) {
    let cart: CartInterface[] = [];
    this.dbInstance.executeSql('select * from CARTS WHERE id=?', [id]).then(
      (res) => {
        for (var x = 0; x < res.rows.length; x++)
          cart.push(res.rows.item(x));
      }
    ).catch(e => {
      this.toasts.info("an error has occurred");
    });
    return cart[0];
  }

  update(cart: CartInterface) {
    return this.dbInstance === null ? false : this.dbInstance
      .executeSql('UPDATE CARTS SET ' +
        'name=?, ' +
        'description=?, ' +
        'date=? ' +
        'WHERE id=?', [cart.name, cart.description, cart.date, cart.id])
      .then(() => { return true })
      .catch(e => {
        this.toasts.info("an error has occurred");
        return false;
      });
  }

  deleteById(id: number) {
    return this.dbInstance === null ? false : this.dbInstance
      .executeSql('DELETE FROM CARTS WHERE ID=?', [id])
      .then(() => { return true })
      .catch(e => {
        this.toasts.info("an error has occurred");
        return false;
      });
  }

}
