import { ComponentInterface } from "../interface/ComponentInterface";

export class Component implements ComponentInterface {

  id: number;
  title: string;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
