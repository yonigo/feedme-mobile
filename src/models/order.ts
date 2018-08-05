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
    supplierId: String;
    reciverId: String;
    imageUrl: string;
    productObject: Product;
    /**
     *
     */
    constructor(product: string, quantity: number, expirationDate: Date, pickupDate: Date) {
        this.product = product;
        this.quantity = quantity;        
        this.expirationDate = expirationDate;
        this.pickupDate = pickupDate;
        this.imageUrl = '../../assets/imgs/001-food.svg';
    }
}