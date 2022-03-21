/* Functions as a Child(FaaC for short) and Render Props are treated separately in the official React documentation.
However, Functions as Children are already mentioned in the Render Props section hinting at the fact that they are similar

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Functions as a Child(also called Functions as Children) and Render Props are patterns which allow you to
bundle business or application logic in some sort of overarching component - similar to a Higher Order Component.

In contrast to a HOC though, a function is called which is passed the relevant data as a parameter
(as opposed to returning a new component which receives data as props).
 */

//////////////////////////////{CHILDREN}//////////////////////////////{
/* The function takes the form of a child element of the relevant component in the Function as Children pattern
    (so this.props.children).
 */

//////////////////////////////{Props are anything}//////////////////////////////{
/*
We've learned that the value of a prop in JSX can be any valid JavaScript expression.
As invoked functions can also return expressions, we can also use the return value of this function as a prop.
Strings, Booleans, Arrays, Objects, other React elements and null can also be passed as props.
children are a special form of props, meaning that both of these lines will result in the same output when rendered: */


<MyComponent>I am a child element</MyComponent>
<MyComponent children="I am a child element" />

/* props.children can be used to access I am a child element in MyComponent.


We can use this principle and also pass functions which are invoked during render() within a component.
This way, data can be passed from one component into the next.

The principle is similar to that of Higher Order Components, but offers a little more flexibility.
We do not need to connect our component with a Higher Order Component but can simply be included within
JSX in our current component.

Thinking back to our withFormatting HOC from the previous chapter (See HOCexample.js)
a similar approach could look like the following using a Function as a Child(FaaC):
 */


/* We have defined two functions: the bold function and the italic function.
 */

const bold = (string) => {
  return <strong>{string}</strong>;
};

const italic = (string) => {
  return <em>{string}</em>;
};

/* props.children can then be called in a formatter function
after checking whether the children props are actually a function. */

// Formatter function accepting "children"
const Formatter = ({children}) => {
  if (typeof {children} !== 'function') {
    console.warn('children prop must be a function!');
    return null;
  }

/* The function takes in an object with two properties:
bold with the bold function as its value and italic with the italic function as its value.

The invoked function is returned by the component. */

  return { children ({ bold, italic }) };
};

// Main.js


/* Using this Function as Children component, a function in JSX is passed to the child element:
 */


  // Main.js
  /* Using this Function as Children component, a function in JSX is passed to the child element:
   */
  <div>
    <p>This text does not know about the Formatter function</p>
    <Formatter>{({ bold }) => <p>This text {bold('does though')}</p>}</Formatter>
  </div>








/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*
  Let's look at our second example again which we talked about in the chapter on Higher Order Components.


  This is what the rendered list of cryptocurrencies looks like as Function as a Child: */

  /* At first glance, the example does not look much different to the one we have introduced in the previous chapter using Higher Order Components.
  But if you pay attention, you will notice some differences:
  */

  /*
  No new component is generated and we can work directly with our current component

  The loadData method can access this.props to read the limit prop.This can then be used as a parameter in the API call

  We do not return any component that was passed in anymore and calls the children function instead which it receives from its own props

  The children function receives the isLoading state and returns the items.

   */


const App = () => {
  return(
  <div>
    <h1>Current Crypto Currency Prices</h1>
    <CryptoPrices limit={5}>
      {({ isLoading, items }) => isLoading ? (
        <p>Loading prices. Please be patient.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li>
              {item.name} ({item.symbol}): EUR {item.current_price}
            </li>
          ))}
        </ul>
      )}
    </CryptoPrices>
    </div>
  )
}


/* We can now combine the PriceTable component which expects three props with the CryptoPrices component (that returns the values needed in the PriceTable). */
const app = () => {
  return (
    <CryptoPrices limit={5}>

      {/* ///////////// This is what is passes as {children} to the PriceTable component////////////// */}
      {({ isLoading, items, loadData }) => (
        <CryptoPriceTable isLoading={isLoading} items={items} loadData={loadData} />
      )}
    {/*  ////////////////////////////////////////////////////////////////////////////////////////// */}

    </CryptoPrices>
  )
}

/* Or even more succinct using spread syntax: */

<CryptoPrices limit={5}>
  {(props) => <PriceTable {...props} />}
</CryptoPrices>

// Hook to handle state
const useCrypto = ({ state }) => {
  const [items, setItems] = useState(state || []);
  return { items, setItems };
}

const useLoading = (state) => {
  const [isLoading, setIsLoading] = useState(state || false);

  return { isLoading, setIsLoading };
}

const CryptoPriceTable = ({limit, children}) => {

  //destructure custom hook
  const { items, setItems } = useCrypto();
  const { isLoading, setIsLoading } = useLoading()

  //////////////////////// Perform logic for CryptoPriceTableComponent//////////////
   //useEffect
    useEffect(() => {
        loadData();
    }, []);


  loadData = async () => {
    setIsLoading(true);
    try {
      const cryptoTicker = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=${limit ||
          10}`
      );

        const cryptoTickerResponse = await cryptoTicker.json();

        setIsLoading(false)
        setItems(cryptoTickerResponse)

    } catch (err) {
        setIsLoading(false)
    }
  };

    if (typeof children !== 'function') {
      return null;
    }


    return children({
      isLoading,
      items,
      loadData: loadData,
    });

}
