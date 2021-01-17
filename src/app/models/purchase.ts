export class Purchase {
    name: string;
    count: number;
    price: number;
    totalPrice: number;

    constructor(totalPrice, singularPrice, count, name) {
        this.totalPrice = totalPrice;
        this.price = singularPrice;
        this.count = count;
        this.name = name;
    }
}
