import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/util/interface/ProductInterface';

@Component({
  selector: 'app-list-produts',
  templateUrl: './list-produts.component.html',
  styleUrls: ['./list-produts.component.scss'],
})
export class ListProdutsComponent implements OnInit {

  //@Input()
  //public products: ProductInterface[] = [];

  constructor() { }

  ngOnInit() {}

}
