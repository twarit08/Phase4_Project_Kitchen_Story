import { Item } from "../allitems/Items";

export class Order {
    id!: string;
    name!: string;
    address!: string;
    state!: string;
    contact!: string;
    quantity!: number;
    payment!: string;
    od!: string;
    product!: Item;


}