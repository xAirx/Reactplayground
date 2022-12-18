/* How we can fetch data using useEffect:
 */
useEffect(() => {
  axios
    .get("https://randomuser.me/api/")
    .then((response) => console.log(response.data));
}, []);

/* But in react, here we have a more clear way to fetch data. Using a third library react-fetch-hook allows us to fetch data and cut down on our reused code.

//install
npm install react-fetch-hook

//or

yarn add react-fetch-hook

//import */

import useFetch from "react-fetch-hook";

//and use

const { isLoading, data, error } = useFetch("https://swapi.co/api/people/1");
console.log(data);
