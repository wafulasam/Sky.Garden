
// get total quantities
export function getTotalCartQuantity (items) {
    const count = items.map((item) => item.quantity)
    const total = count.reduce((a, b) => a + b, 0);
    return total;
}

// get total price
export function getTotalCartPrice (items) {
    const count = items.map((item) => item.stock_record_price_retail)
    const total = count.reduce((a, b) => a + b, 0);
    return total;
}