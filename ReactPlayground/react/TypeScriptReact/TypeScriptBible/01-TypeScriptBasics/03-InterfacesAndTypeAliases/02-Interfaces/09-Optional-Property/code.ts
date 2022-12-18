interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  dateAdded?: Date; // optional property
  getTotal(discount: number): number;
}

const tableOrder6: OrderDetail = {
  product: { name: "table", unitPrice: 100 },
  quantity: 1,
  dateAdded: new Date(),
  getTotal(discount: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discount;
    return priceWithoutDiscount - discountAmount;

    // const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    // const discountAmount = priceWithoutDiscount * (discount || 0);
    // return priceWithoutDiscount - discountAmount;
  }
};
