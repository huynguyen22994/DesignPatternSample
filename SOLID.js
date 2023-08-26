// Nguyên tắt SOLID dùng để giúp việc viết mã rõ ràng hơn. 
// S: Single Responsibility Principle -> Mỗi Class hoặc mỗi hàm chỉ có làm một trách nhiệm
// O: Open/Closed Principle
// L: Liskov Substitution Principle
// I: Interface Segregation Principle
// D: Dependency Inversion Principle

// Ví dụ cho S: Single Responsibility

class Product {
    constructor(id, name, price, quatity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quatity = quatity;
    }
}

class Order {
    constructor(id) {
        this.id = id;
        this.date = Date.now();
        this.product = [];
    }
}

class OrderManagement {
    constructor() {
        this.order = null;
    }

    createOrder(orderId) {
        this.order = new Order(orderId);
        return this.order;
    }

    addProduct(product) {
        this.order.product.push(product);
    }

    getOrder() {
        return this.order;
    }

    isValidOrder() {
        return !!this.order.product.length < 10;
    }

    sendMail() {
        if(this.isValidOrder()) {
            const mail = new SendMail();
            mail.sendMail(this.order, 'order');
        }
    }
}
// Áp dung solid là tính năng gửi mail thực hiện trách nhiệm khác ngoài việc quản lý đơn hàng nê
// ---> phải tách ra 1 lớp khác để thực hiện

class SendMail {

    order(order) {
        console.log('Send mail to customer with order::: ' + JSON.stringify(order));
    }

    sendMail(order, type) {
        this[type](order);
    }
}

const product1 = new Product(1, 'Sách', 100000, 2);
const product2 = new Product(2, 'Áo', 200000, 3);
const orderMgmt = new OrderManagement();
orderMgmt.createOrder(1);
orderMgmt.addProduct(product1);
orderMgmt.addProduct(product2);
orderMgmt.sendMail();