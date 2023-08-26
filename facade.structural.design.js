// Mục đích của mẫu này là muốn chúng ta nắm được việc là dù phía sau xử lý phức tạp logic như thế nào thì cũng phải thiết kế cho phía người dùng thật đơn giản
// ---> mục đích facade pattern là biến thứ phức tạp thành đơn giản

class Shipping {
    calc(value) {
        return value + 10000;
    }
}

class Discount {
    calc(value) {
        return value - 5000;
    }
}

class Fees {
    calc(value) {
        return value * 0.1;
    }
}

class PriceShopeeFacade {
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price) {
        price = this.discount.calc(price);
        price = this.shipping.calc(price);
        price = this.fees.calc(price);
        return price;
    }
}

const shopeePrice = new PriceShopeeFacade();
console.log(shopeePrice.calc(10000));