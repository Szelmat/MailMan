import { useState } from "react"

import 'react18-json-view/src/style.css'
import JsonView from "react18-json-view";
import 'react18-json-view/src/dark.css';

enum TABS {
  RAW = 'Raw',
  JSON = 'JSON',
}

export const ReponseBodyContent = (props: { content: string }) => {
  const [ activeTab, setActiveTab ] = useState<TABS>(TABS.RAW);

  return (
    <div className="w-full m-5 text-left">
      <div role="tablist" className="tabs tabs-bordered tabs-xs">
        {Object.keys(TABS).map(tabKey => {
          const currTab = TABS[tabKey as keyof typeof TABS];
          return (
            <a role="tab"
              className={"tab" + (activeTab === currTab ? " tab-active" : "")}
              key={currTab}
              onClick={() => {
                if (activeTab !== currTab) {
                  setActiveTab(currTab);
                }
              }}
            >{currTab}</a>
          )
        })}
      </div>
      <div className="mt-5">
        {activeTab === TABS.JSON ? (
          <JsonView
            className="text-sm font-mono"
            dark
            enableClipboard
            src={JSON.parse(props.content ? props.content : '{}')}
            theme="atom"
            collapseStringsAfterLength={300}
          />
        ):(
          <textarea 
            className="textarea textarea-bordered w-full text-sm font-mono"
            value={props.content} spellCheck="false" readOnly rows={10}
          />
        )}
      </div>
    </div>
  )
}

