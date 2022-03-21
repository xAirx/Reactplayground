/* React Query Axios GET

To fetch JSON data from API, we use React Query useQuery hook:

Now look at following simple example: */

import { useQuery } from "react-query";

function App() {
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    "query-tutorials",
    fetchTutorials,
    { enabled: false, retry: 2, onSuccess, onError }
  );
}

/* – 'query-tutorials' (queryKey) (Required): The query will automatically update when this key changes (in case enabled is not set to false). If you want to run the query everytime title changes, you can use queryKey like this: ['query-tutorials', title].

– fetchTutorials (queryFn) is async function that returns a Promise.

– enabled: if false, disable this query from automatically running.
– retry: if true, failed queries will retry infinitely. If set to a number, failed queries will retry that number of times. By default, queries are silently retried 3 times, with exponential backoff delay before capturing and displaying an error to the UI.

– onSuccess: the callback function that will fire any time the query successfully fetches new data.
– onError: the callback function that will fire if the query encounters an error and will be passed the error.

– useQuery result contains:

    isLoading: true if there is no cached data and the query is currently fetching.
    isSuccess: true if the query has received a response with no errors and ready to display data, data property is the data received from the successful fetch.
    isError: true if the query has failed with an error. error property has the error received from the attempted fetch.
    refetch: the function to manually refetch the query.

There are many properties that you can find at useQuery Reference.

Let’s implement a React component with React Query and Axios that can:

    get all Tutorials
    get Tutorial by Id
    find Tutorial by title */

import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import apiClient from "./http-common";

function App() {
  const [getId, setGetId] = useState("");
  const [getTitle, setGetTitle] = useState("");

  const [getResult, setGetResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  const { isLoading: isLoadingTutorials, refetch: getAllTutorials } = useQuery(
    "query-tutorials",
    async () => {
      return await apiClient.get("/tutorials");
    },
    {
      enabled: false,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        setGetResult(fortmatResponse(result));
      },
      onError: (err) => {
        setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isLoadingTutorials) setGetResult("loading...");
  }, [isLoadingTutorials]);

  function getAllData() {
    try {
      getAllTutorials();
    } catch (err) {
      setGetResult(fortmatResponse(err));
    }
  }

  const { isLoading: isLoadingTutorial, refetch: getTutorialById } = useQuery(
    "query-tutorial-by-id",
    async () => {
      return await apiClient.get(`/tutorials/${getId}`);
    },
    {
      enabled: false,
      retry: 1,
      onSuccess: (res) => {
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        setGetResult(fortmatResponse(result));
      },
      onError: (err) => {
        setGetResult(fortmatResponse(err.response?.data || err));
      },
    }
  );

  useEffect(() => {
    if (isLoadingTutorial) setGetResult("loading...");
  }, [isLoadingTutorial]);

  function getDataById() {
    if (getId) {
      try {
        getTutorialById();
      } catch (err) {
        setGetResult(fortmatResponse(err));
      }
    }
  }

  const { isLoading: isSearchingTutorial, refetch: findTutorialsByTitle } =
    useQuery(
      "query-tutorials-by-title", // ["query-tutorials-by-title", getTitle],
      async () => {
        return await apiClient.get(`/tutorials?title=${getTitle}`);
      },
      {
        enabled: false,
        retry: 1,
        onSuccess: (res) => {
          const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
          };

          setGetResult(fortmatResponse(result));
        },
        onError: (err) => {
          setGetResult(fortmatResponse(err.response?.data || err));
        },
      }
    );

  useEffect(() => {
    if (isSearchingTutorial) setGetResult("searching...");
  }, [isSearchingTutorial]);

  function getDataByTitle() {
    if (getTitle) {
      try {
        findTutorialsByTitle();
      } catch (err) {
        setGetResult(fortmatResponse(err));
      }
    }
  }

  const clearGetOutput = () => {
    setGetResult(null);
  };

  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">React Query Axios GET - BezKoder.com</div>
        <div className="card-body">
          <div className="input-group input-group-sm">
            <button className="btn btn-sm btn-primary" onClick={getAllData}>
              Get All
            </button>

            <input
              type="text"
              value={getId}
              onChange={(e) => setGetId(e.target.value)}
              className="form-control ml-2"
              placeholder="Id"
            />
            <div className="input-group-append">
              <button className="btn btn-sm btn-primary" onClick={getDataById}>
                Get by Id
              </button>
            </div>

            <input
              type="text"
              value={getTitle}
              onChange={(e) => setGetTitle(e.target.value)}
              className="form-control ml-2"
              placeholder="Title"
            />
            <div className="input-group-append">
              <button
                className="btn btn-sm btn-primary"
                onClick={getDataByTitle}
              >
                Find By Title
              </button>
            </div>

            <button
              className="btn btn-sm btn-warning ml-2"
              onClick={clearGetOutput}
            >
              Clear
            </button>
          </div>

          {getResult && (
            <div className="alert alert-secondary mt-2" role="alert">
              <pre>{getResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
