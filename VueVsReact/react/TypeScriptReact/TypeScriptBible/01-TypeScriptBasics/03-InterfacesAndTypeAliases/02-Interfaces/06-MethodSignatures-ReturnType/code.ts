interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(discount: number): number;
}

const tableOrder2: OrderDetail = {
  product: { name: "table", unitPrice: 100 },
  quantity: 1,
  getTotal(discountPercentage: number): string { // Return Type must be number as defined in the interface
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage;
    return (priceWithoutDiscount - discountAmount).toString();
  }
};
