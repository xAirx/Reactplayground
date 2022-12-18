interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  // here number is aliased as discount
  getTotal(discount: number): number;
  //(parameter) discount: number

}

const tableOrder3: OrderDetail = {
  product: { name: "table", unitPrice: 100 },   // must be per interface contract
  quantity: 1,
  getTotal(discountPercentage: string): number { // must  NUMBER be per interface contract
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage; // must be per interface contract
    return priceWithoutDiscount - discountAmount;
  }
};
