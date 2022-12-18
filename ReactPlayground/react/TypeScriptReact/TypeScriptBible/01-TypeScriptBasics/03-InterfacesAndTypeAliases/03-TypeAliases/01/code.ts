type Product1 = {
  name: string;
  unitPrice: number;
};

type OrderDetail1 = {
  product: Product1;
  quantity: number;
  getTotal: (discount: number) => number;
};

const table1: Product1 = {
  name: "Table",
  unitPrice: 500
};

type GetTotal4 = (discount: number) => number;

const orderDetail: OrderDetail1 = {
  product: table1,
  quantity: 1,
  getTotal: GetTotal4 => {
    const priceWithoutDiscount = table1.unitPrice * 1;
    const discountAmount = priceWithoutDiscount * GetTotal4;
    return priceWithoutDiscount - discountAmount;
  }
};
