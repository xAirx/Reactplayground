import { BasketActionTypes, IBasketAdd } from "./src/BasketTypes";
import { IProduct } from "./src/ProductsData";
export const addToBasket = (product: IProduct): IBasketAdd => ({
  product,
  type: BasketActionTypes.ADD
});
