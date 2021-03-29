import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { CartInterface } from '../util/interface/CartInterface';
import { ProductInterface } from '../util/interface/ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public dbInstance: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  async getDB() {
    return
  }

  async createDatabase(){
    try{
      this.dbInstance = await this.sqlite.create({ name: 'to_buy.db', location: 'default' });
      // if create the database
      this.createTables(this.dbInstance);
    }catch(error){
      console.error("An error occurred while trying to create database.");
    }
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
      + ' qtd INTEGER(3), value INTEGER(6), in_cart INTEGER(1)'
      + ' id_cart INTEGER, FOREIGN KEY(id_cart) REFERENCES CARTS(id))', [])
      .catch(e => console.log(e));

    dbInstance.executeSql('CREATE TABLE IF NOT EXISTS '
      + 'ITEMSREF(id INTEGER PRIMARY KEY AUTOINCREMENT,'
      + ' name VARCHAR(15), description VARCHAR(50),'
      + ' qtd INTEGER(3), value INTEGER(6))', [])
      .catch(e => console.log(e));
  }
}
