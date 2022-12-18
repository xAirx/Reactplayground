import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const res = await fetch(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        const json = await res.json();
        setData(json.hits);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);

  return (
    <React.Fragment>
      {hasError && <p>Something went wrong.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.ObjectId}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}

export default App;
