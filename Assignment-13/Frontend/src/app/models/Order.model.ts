export class Order {
    username: string;
    cart: Cart[];
    amount_spent: number;
    order_status: string;
}

export class Cart {
    item: string;
    quantity: number = 0;
}