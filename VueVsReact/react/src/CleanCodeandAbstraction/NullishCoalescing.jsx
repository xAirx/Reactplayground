/* <!-- How to Use the Nullish Coalescing Operator in JavaScript

In JavaScript, if a certain value is falsy (like null, undefined, 0, '', NaN), we can use the or (||) conditional to provide a fallback value.

For example, if we have a product page component and we want to display a given product's price, you can use a || conditional to either show the price or show the text "Product is unavailable".
 -->
 */

export default function ProductPage({ product }) {
  return (
     <>
       <ProductDetails />
       <span>{product.price || "Product is unavailable"} // if price is 0, we will see "Product is unavailable"</span>
     </>
  );
}

{/*
<!-- However, there's a small error with our existing code.

If the price has the value of 0, which is falsy, instead of showing the price itself, we're going to show the text "Product is unavailable" – which is not what we want.

We need a more precise operator to only return the right hand side of our expression if the left hand side is null or undefined instead of any falsy value.

This is available now in the nullish coalescing operator. It will return its right hand operand when its left hand operand is null or undefined.

Otherwise it will return its left hand side operand:

--> */}

{/* null ?? 'fallback';
// "fallback"

0 ?? 42;
// 0


 */}

{/* <!--
The way to fix our code that we have above is simply to replace the or conditional with the nullish coalescing operator to show the correct price of 0.
 --> */}

export default function ProductPage({ product }) {
  return (
     <>
       <ProductDetails />
       <span>{product.price ?? "Product is unavailable"}</span>
     </>
  );
}