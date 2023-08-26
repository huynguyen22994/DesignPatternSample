// Mẫu thiết kế dùng khi tạo ra những hành vi, sự kiện có thể bị thay đổi nhiều trong run time.
// Ví dụ cho mẫu về lấy giá tiền

function defaultPrice(price) {
    return price;
}

function promotionPrice(price) {
    return price / 0.2;
}

function getSalePrice11(price) {
    return price - 13000;
}

const getPriceStratery = {
    default: defaultPrice,
    promotion: promotionPrice,
    sale11: getSalePrice11
}

function getPrice(originPrice, type) {
    return getPriceStratery[type](originPrice);
}