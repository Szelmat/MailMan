import { ReactNode } from "react"

export const EntryField = (props: { children: ReactNode }) => {
  return (
    <div className="w-1/2 pr-2 align-middle select-all">
      { props.children }
    </div>
  )
}

