import { useEffect, useState } from "react"
import { getFormattedJSON } from "../util/stringFormat";

enum TABS {
  RAW = 'Raw',
  JSON = 'JSON',
}

export const ReponseBodyContent = (props: { content: string }) => {
  const [ content, setContent ] = useState<string>(props.content);
  const [ activeTab, setActiveTab ] = useState<TABS>(TABS.RAW)

  useEffect(() => {
    setContent(formatContent());
  }, [props.content]);

  useEffect(() => {
    setContent(formatContent())
  }, [activeTab])

  const formatContent = (): string => {
    switch(activeTab) {
      case TABS.JSON:
        return getFormattedJSON(props.content) ?? '';
      default:
        return props.content;
    }
  }

  return (
    <div className="w-full m-5">
      <div role="tablist" className="tabs tabs-bordered tabs-xs">
        {Object.keys(TABS).map(tabKey => {
          const currTab = TABS[tabKey as keyof TABS]
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
      <textarea className="textarea textarea-bordered w-full mt-5" value={content} spellCheck="false" readOnly rows={10} />
    </div>
  )
}

