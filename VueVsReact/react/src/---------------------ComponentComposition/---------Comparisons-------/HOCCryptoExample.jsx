/* Higher Order Components(or HOC or HOCs for short) were, and still are, a central concept in React.
They allow you to implement components with reusable logic and are loosely tied to Higher Order Functions from functional programming.
These kind of functions take a function as a parameter and return another function.
In terms of React, this principle is applied to components.
Higher Order Components derive their name from those Higher Order Functions.
 */

////HOCS ARE returning a new component which receives data as props////

const withFormatting = (WrappedComponent) => {
  bold = (string) => {
    return <strong>{string}</strong>;
  };
  italic = (string) => {
    return <em>{string}</em>;
  };

  return <WrappedComponent bold={this.bold} italic={this.italic} />;
};

/*
We have defined a function called withFormatting that takes in a React component.
The function will return a new React component which in turn renders the component that was passed into the function and equips it with the props bold and italic.
The component can now access these props: */

const FormattedComponent = withFormatting(({ bold, italic }) => (
  <div>
    This text is {bold("bold")} and {italic("italic")}.
  </div>
));

/* But enough of the theory.
Let's look at an example. We are going to load a list of the 10 biggest cryptocurrencies and their current price.
To obtain the data from the Coingecko API, we create a Higher Order Component which loads the data and passes it to the layout component: */

///////////////////// LAYOUT COMPONENT //////////////////////

/* Both components act independently of one another.
The PriceTable is not limited to showing cryptocurrency prices, and the withCryptoPrices component does not necessarily need to display its data in a PriceTable component.
 We managed to write two completely encapsulated and reusable components.
 */

/*  */
/*  Whenever an instance of the CryptoPriceTable is rendered, the Higher Order Component will trigger an API request in the componentDidMount() lifecycle method and pass its result to the PriceTable component.
/*  The PriceTable then only needs to concern itself with displaying the data: */

const CryptoPriceTable = ({ isLoading, items, loadData }) => {
  if (isLoading) {
    return <p>Prices are being loaded. Please wait.</p>;
  }

  if (!items || items.length === 0) {
    return (
      <p>
        No data available. <button onClick={loadData}>Try again!</button>
      </p>
    );
  }

  return (
    <table>
      {items.map((item) => (
        <tr key={item.id}>
          <td>
            {item.name} ({item.symbol})
          </td>
          <td>EUR {item.current_price}</td>
        </tr>
      ))}
      <tr>
        <td colSpan="2">
          <button onClick={loadData}>Reload</button>
        </td>
      </tr>
    </table>
  );
};

const CryptoPriceTable = withCryptoPrices(CryptoPriceTable);

////////////// Smart component doing all the work and logic /////////////

const withCryptoPrices = (WrappedComponent) => {
  const [isLoading, items] = useState();

  useEffect(() => {
    () => {
      this.loadData();
    };
  }, []);

  loadData = async () => {
    this.setState(() => ({
      isLoading: true,
    }));

    try {
      const cryptoTicker = await fetch(
        "https://api.coingecko.com" +
          "/api/v3/coins/markets?vs_currency=eur&per_page=10"
      );
      const cryptoTickerResponse = await cryptoTicker.json();

      this.setState(() => ({
        isLoading: false,
        items: cryptoTickerResponse,
      }));
    } catch (err) {
      this.setState(() => ({
        isLoading: false,
      }));
    }
  };
  const { isLoading, items } = this.state;
  return (
    <WrappedComponent
      isLoading={isLoading}
      items={items}
      loadData={this.loadData}
    />
  );
};

/*
We also have the opportunity to combine other layout components with the withCryptoPrices HOC.
To illustrate this, we are going to display the prices in CSV format.Our HOC will remain the same whereas the layout component can be implemented as such: */

const PriceCSV = ({ isLoading, items, loadData, separator = ";" }) => {
  if (isLoading) {
    return <p>Prices are loaded, please wait.</p>;
  }

  if (!items || items.length === 0) {
    return (
      <p>
        No data available <button onClick={loadData}>Try again</button>
      </p>
    );
  }

  return (
    <pre>
      {items.map(
        ({ name, symbol, current_price }) =>
          `${name}${separator}${symbol}${separator}${current_price}\n`
      )}
    </pre>
  );
};

const CryptoCSV = withCryptoPrices(PriceCSV);
