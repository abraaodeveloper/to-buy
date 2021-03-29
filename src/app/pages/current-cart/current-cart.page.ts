import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CartInterface } from 'src/app/util/interface/CartInterface';
import { ProductInterface } from 'src/app/util/interface/ProductInterface';

@Component({
  selector: 'app-current-cart',
  templateUrl: './current-cart.page.html',
  styleUrls: ['./current-cart.page.scss'],
})
export class CurrentCartPage implements OnInit {

  title = "Title";
  carts: CartInterface[] = [];
  products: ProductInterface[] = [];
  segmentActive: string = "to_buy";
  cartActive: CartInterface = null;
  expandOptions = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService
  ){ }

  ngOnInit() {}

  segmentChanged(ev: any) {
    this.segmentActive = ev.detail.value;
    if(this.cartActive != null){
      this.products = this.productService.getAllByCartId(this.cartActive.id);
    }
  }

  expand(){
    this.expandOptions = !this.expandOptions;
  }

  ionViewDidEnter() {
    this.carts = this.cartService.getAll();
  }

  keytab(event){
    let element = event.srcElement.nextElementSibling; // get the sibling element

    if(element == null)  return;
    else element.focus();
}
}
