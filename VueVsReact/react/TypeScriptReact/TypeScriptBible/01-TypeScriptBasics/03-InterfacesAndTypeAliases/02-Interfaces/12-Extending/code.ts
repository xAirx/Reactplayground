interface Product13 {
  name: string;
  readonly unitPrice: number;
}

interface DiscountCode13 {
  code: string;
  percentage: number;
}

interface ProductWithDiscountCodes13 extends Product13 {
  discountCodes: DiscountCode13[];
}

const table13: ProductWithDiscountCodes13 = {
  name: "Table",
  unitPrice: 500,
  discountCodes: [
    { code: "SUMMER10", percentage: 0.1 },
    { code: "BFRI", percentage: 0.2 }
  ]
};
