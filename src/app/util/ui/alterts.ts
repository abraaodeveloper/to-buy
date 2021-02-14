import { CartInterface } from 'src/app/util/interface/CartInterface';
import { Cart } from "../models/Cart";

export abstract class AlertsInputs {

  constructor() { }

  public static inputsCartAlert(cart: CartInterface): any[] {
    const inputsEdit = [
      { name: 'name', type: 'text', text: cart.name ? cart.name : "" },
      { name: 'description', type: 'textarea', placeholder: cart.description },
    ];

    const inputsAdd = [
      { name: 'name', type: 'text', text: cart.name ? cart.name : "" },
      { name: 'description', type: 'textarea', placeholder: 'Description' },
      { name: 'date', type: 'date', min: '2017-03-01', max: '2018-01-12' },
    ];

    return cart ? inputsEdit : inputsAdd;
  }

  static success() {

  }

  static info() {

  }

  static danger() {

  }
}
