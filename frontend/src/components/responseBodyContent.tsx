import { useEffect, useState } from "react"
import 'react-json-view-lite/dist/index.css';
import hljs from 'highlight.js';

import 'highlight.js/styles/atom-one-dark.css';

enum TABS {
  RAW = 'Raw',
  JSON = 'JSON',
}

export const ReponseBodyContent = (props: { content: string }) => {
  const [ activeTab, setActiveTab ] = useState<TABS>(TABS.RAW);

  hljs.configure({ cssSelector: 'code' });

  useEffect(() => {
    delete document.querySelector('code')?.dataset.highlighted
    hljs.highlightAll();
  }, [props.content, activeTab]);

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
      {activeTab === TABS.JSON ? (
        <div className="mt-5 w-full max-w-1/2" style="background-color:#282c34;">
            <code className="language-json whitespace-pre-wrap">{JSON.stringify(JSON.parse(props.content), null, 2)}</code>
        </div>
      ):(
        <textarea className="textarea textarea-bordered w-full mt-5" value={props.content} spellCheck="false" readOnly rows={10} />
      )}
    </div>
  )
}

