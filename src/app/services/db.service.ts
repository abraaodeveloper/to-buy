import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { CartInterface } from '../util/interface/CartInterface';
import { ProductInterface } from '../util/interface/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private dbInstance: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  async getDB() {
    return this.sqlite.create({ name: 'data.db', location: 'default' });
  }

  createTables(dbInstance: SQLiteObject) {
    dbInstance.executeSql('CREATE TABLE IF NOT EXISTS '
      + 'CARTS(id INTEGER PRIMARY KEY AUTOINCREMENT,'
      + ' name VARCHAR(15), description VARCHAR(50),'
      + ' date INTEGER)', [])
      .catch(e => console.log(e));

    dbInstance.executeSql('CREATE TABLE IF NOT EXISTS '
      + 'ITEMS(id INTEGER PRIMARY KEY AUTOINCREMENT,'
      + ' name VARCHAR(15), description VARCHAR(50),'
      + ' qtd INTEGER(3), value INTEGER(6),'
      + ' id_cart INTEGER)', [])
      .catch(e => console.log(e));

    dbInstance.executeSql('CREATE TABLE IF NOT EXISTS '
      + 'ITEMSREF(id INTEGER PRIMARY KEY AUTOINCREMENT,'
      + ' name VARCHAR(15), description VARCHAR(50),'
      + ' qtd INTEGER(3), value INTEGER(6))', [])
      .catch(e => console.log(e));
  }
}
