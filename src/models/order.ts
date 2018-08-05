export class Order {
    /**
     *
     */
    constructor(public product: string, public amount: number, public imageUrl: string, public expiration: Date, public pickupDate: Date) {
    }
}