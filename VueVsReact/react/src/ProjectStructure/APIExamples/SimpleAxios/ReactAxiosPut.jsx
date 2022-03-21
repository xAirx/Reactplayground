React Axios Put

We’re gonna use React with Axios PUT request to update an existing Tutorial.

import React, { useRef, useState } from "react";
import "./App.css";

import apiClient from "./http-common";

function App() {
  const put_id = useRef(null);
  const put_title = useRef(null);
  const put_description = useRef(null);
  const put_published = useRef(null);

  const [putResult, setPutResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function putData() {
    const id = put_id.current.value;

    if (id) {
      const putData = {
        title: put_title.current.value,
        description: put_description.current.value,
        published: put_published.current.checked,
      };

      try {
        const res = await apiClient.put(`/tutorials/${id}`, putData, {
          headers: {
            "x-access-token": "token-value",
          },
        });

        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };

        setPutResult(fortmatResponse(result));
      } catch (err) {
        setPutResult(fortmatResponse(err.response?.data || err));
      }
    }
  }

  const clearPutOutput = () => {
    setPutResult(null);
  };

  return (
    <div id="app" className="container">
      <div className="card">
        <div className="card-header">React Axios PUT - BezKoder.com</div>
        <div className="card-body">
          <div className="form-group">
            <input type="text" className="form-control" ref={put_id} placeholder="Id" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref={put_title} placeholder="Title" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" ref={put_description} placeholder="Description" />
          </div>
          <div className="form-check mb-2">
            <input type="checkbox" className="form-check-input" ref={put_published} />
            <label className="form-check-label" htmlFor="put_published">Publish</label>
          </div>
          <button className="btn btn-sm btn-primary" onClick={putData}>Update Data</button>
          <button className="btn btn-sm btn-warning ml-2" onClick={clearPutOutput}>Clear</button>

          { putResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{putResult}</pre></div> }
        </div>
      </div>
    </div>
  );
}

export default App;
