export class Order {
    username: string;
    cart: Cart[];
    amount_spent: number;
    order_status: string;
}

class Cart {
    item: string;
    price: number;
}