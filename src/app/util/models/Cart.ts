import { CartInterface } from "../interface/CartInterface";

export class Cart implements CartInterface{

    id: number;
    name: string;
    description: string;
    date: number;

    constructor(name: string, description: string, date: number) {
        this.name = name;
        this.description = description
        this.date = parseInt(Date.now()+"");
    }
}
