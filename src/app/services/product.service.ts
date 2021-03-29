import { CRUDInterface } from './../util/interface/CRUDInterface';
import { Injectable } from '@angular/core';

import { DbService } from 'src/app/services/db.service';
import { CartInterface } from 'src/app/util/interface/CartInterface';

import { SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Toast } from '../util/ui/toast';
import { ToastController } from '@ionic/angular';
import { ProductInterface } from '../util/interface/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements CRUDInterface {

  private toasts: Toast;

  constructor(private dbService: DbService, private toastController: ToastController) {
    this.toasts = new Toast(toastController);
  }

  create(product: ProductInterface) {
    this.dbService.dbInstance.executeSql('insert into ITEMS(name, description, qtd, value, inCart, id_cart) VALUES(?, ?, ?, ?, ?, ?)',
      [product.name, product.description, product.qtd, product.value, product.inCart, product.idCart])
      .catch(e => {
        this.toasts.info("an error has occurred");
        return false;
      });
    return true;
  }

  getAllByCartId(idCart: number): ProductInterface[] {
    let products: ProductInterface[] = [];
    this.dbService.dbInstance.executeSql('select * from ITEMS WHERE id_cart=?', [idCart]).then(
      (res) => {
        for(var x=0; x<res.rows.length; x++)
          products.push(res.rows.item(x));
      }
    ).catch(e => {
      this.toasts.info("an error has occurred");
    });
    return products;
  }

  getById(id: number) {
    let cart: CartInterface[] = [];
    this.dbService.dbInstance.executeSql('select * from ITEMS WHERE id=?', [id]).then(
      (res) => {
        for (var x = 0; x < res.rows.length; x++)
          cart.push(res.rows.item(x));
      }
    ).catch(e => {
      this.toasts.info("an error has occurred");
    });
    return cart[0];
  }

  update(product: ProductInterface) {
    this.dbService.dbInstance.executeSql('UPDATE ITEMS SET ' +
      'name=' + product.name + ', ' +
      'description=' + product.description + ', ' +
      'qtd=' + product.qtd + ', ' +
      'value=' + product.value +
      'in_cart=' + product.inCart +
      ' WHERE ID=?', [product.id])
      .catch(e => {
        this.toasts.info("an error has occurred");
        return false;
      });
    return true;
  }

  deleteById(id: number) {
    this.dbService.dbInstance.executeSql('DELETE FROM ITEMS WHERE ID=?', [id])
      .catch(e => {
        this.toasts.info("an error has occurred");
        return false;
      });
    return true;
  }
}
