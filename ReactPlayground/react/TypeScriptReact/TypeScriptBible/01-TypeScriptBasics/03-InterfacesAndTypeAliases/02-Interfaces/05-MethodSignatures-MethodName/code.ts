interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}

const tableOrder1: OrderDetail = {
  product: table,
  quantity: 1,
  // Name must be getTotal as defined in the interface
  total(discountPercentage: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return priceWithoutDiscount - discountAmount;
  }
};
