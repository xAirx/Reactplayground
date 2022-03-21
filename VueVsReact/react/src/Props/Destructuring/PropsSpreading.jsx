// We can spread in props to components using the spread operator.
import react from "react";
import { ReactDOM } from "react";

// Simple component expecting two props
function App() {
  return <Hello firstName="Ahmed" lastName="Bouchefra" />;
}

//Using the Spread operator, you would write the following code instead:

function App() {
  const props = { firstName: "Ahmed", lastName: "Bouchefra" };
  return <Hello {...props} />;
}
