import { useState } from "react";
import { Query } from "../wailsjs/go/main/App";
import { ReponseType } from "./types/http";
import { ResponseCodeBadge } from "./components/badges/ResponseCodeBadge";
import { ReponseBodyContent } from "./components/responseBodyContent";
import { ResponseSizeBadge } from "./components/badges/ResponseSizeBadge";

function App() {
  const [url, setUrl] = useState<string>("https://catfact.ninja/fact");
  const [response, setResponse] = useState<ReponseType>({
    Code: 0,
    Status: "",
    Body: "",
    Error: null,
    Time: null,
    Size: {
      Sum: 0,
      Header: 0,
      Body: 0,
    },
  });

  const query = (url: string) => {
    Query(url).then((data: ReponseType) => setResponse(data));
  };

  return (
    <div id="App" className="my-8">
      <select className="select select-bordered select-xs max-w-xs mx-1 " disabled>
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
        <div className="w-1/2 opacity-0">Test</div>
        <div className="w-1/2 flex flex-col w-full place-items-center mx-10">
          <div className="flex w-full justify-between">
            <span className="badge badge-sm font-mono">{response.Time ?? 0} ms</span>
            <ResponseSizeBadge size={response.Size} />
            <ResponseCodeBadge code={response.Code} status={response.Status} />
          </div>
          <ReponseBodyContent key="body" content={response.Body} />
        </div>
      </div>
    </div>
  );
}

export default App;
