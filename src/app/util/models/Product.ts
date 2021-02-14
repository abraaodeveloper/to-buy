import { ProductInterface } from '../interface/ProductInterface';

export class Product implements ProductInterface{

    id: number;
    name: string;
    description: string;
    qtd: number;
    value: number;
    idCart: number;

    constructor(name: string, description: string, value: number, idCart: number) {
        this.name = name;
        this.description = description
        this.qtd = 1;
        this.value = value;
        this.idCart = idCart;
    }
}
