import { useState } from "react";
import "./App.css";
import { Query } from "../wailsjs/go/main/App";
import { ReponseType } from "./types/http";
import { ResponseCodeBadge } from "./components/responseCodeBadge";

function App() {
  const [url, setUrl] = useState<string>("https://catfact.ninja/fact");
  const [result, setResult] = useState<ReponseType>({
    Code: 0,
    Body: "",
    Error: null,
    Time: null,
  });

  const query = (url: string) => {
    Query(url).then((data: ReponseType) => setResult(data));
  };

  return (
    <div id="App" className="my-8">
      <select className="select select-bordered select-xs max-w-xs mx-1">
        <option selected>GET</option>
        <option>POST</option>
        <option>PUT</option>
    </select>
      <input
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        type="text"
        placeholder="http://localhost/"
        className="input input-bordered input-xs w-full max-w-xs mx-1"
      />
      <button className="btn btn-accent btn-xs mx-1" onClick={() => query(url)}>
        Send
      </button>
      <div className="flex my-10">
        <div className="w-1/2">Test</div>
        <div className="w-1/2">
          <ResponseCodeBadge code={result.Code} />
          <div className="overflow-x-auto">{result.Body}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
