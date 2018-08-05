import { Product } from "./product";

export class Order {
    type: String;
    orderDate: Date;
    pickupDate: Date;
    expirationDate: Date;
    status: String;
    product: String;
    quantity: Number;
    package: String;
    supplier: String;
    reciverId: String;
    productObject: Product;
    /**
     *
     */

    constructor(product: string = '', quantity: number = 0, expirationDate: Date = null, pickupDate: Date = null) {
        this.product = product;
        this.quantity = quantity;        
        this.expirationDate = expirationDate;
        this.pickupDate = pickupDate;
    }
}