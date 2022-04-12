interface Product {
  name: string;
  unitPrice: number;
}

interface OrderDetail {
  product: Product;
  quantity: number;
  getTotal(number): number;
  //here its just number
}

const tableOrder4: OrderDetail = {
  product: table, // must be per interface contract
  quantity: 1,
  getTotal(discountPercentage: number): number {
    const priceWithoutDiscount = this.product.unitPrice * this.quantity;
    const discountAmount = priceWithoutDiscount * discountPercentage; // must be per interface contract since paramname is not defined we can do anything we want here
    return priceWithoutDiscount - discountAmount;
  }
};
