import { useState, useEffect, useCallback, useMemo } from "react";

const myFunction = () => {
  // first time component renders array is an empty array
  const [numbers2, setNumbers] = useState([]);

  useEffect(() => {
    fetch("/numbers.json")
      .then((resp) => resp.json())
      .then((data) => setNumbers(data));
    console.log(`data = ${JSON.stringify(numbers2)}`);
  }, []); // This will run once the component is mounted (first render) and never again

  // Its advantageous to use UseCallback if we are sending the addOne function down to subcomponents.
  // First parameter is a function
  // Second param is a depedency array.

  ///////////////////////// Using Usecallback - new version ///////////////////////////////

  const addOne = useCallback(() => {
    setNumbers([...numbers2, numbers.length + 1]);
    // evertime the numbers array changes we get a "new version" of the array.
    // If we dont use the depedency array here, it will not work.
  }, [numbers2]);

  ///////////////////////// Using Usecallback with currentNumbers - current numbers ///////////////////////////////

  const addOnDifferentVersion = useCallback(() => {
    setNumbers((currentNumbers) => [...currentNumbers, numbers.length + 1]);
  }, []);

  const sum = numbers2.reduce((acc, curr) => acc + curr, 0);
  // Will only give us the sum when the SUM has changed.
  useMemo(() => {
    console.log(`Sum = ${sum}`);
  }, [sum]);

  return (
    <div>
      <h1>{numbers2[0].title}</h1>
      <ul>
        {numbers2.map((number) => (
          <li key={number.id.toString()}>{number.title}</li>
        ))}
      </ul>
      <button onClick={addOne}>Add To Value</button>
    </div>
  );
};
