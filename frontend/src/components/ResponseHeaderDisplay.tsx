import { EntryField } from "./primitives/EntryField";

export const ResponseHeaderDisplay = (props: { headers: {[key:string]: string} }) => {
  console.log(props.headers);

  return (
    <div className="collapse bg-base-200 mt-5">
    <div className="max-h-48 overflow-y-scroll overflow-x-hidden text-xs p-1">
      {Object.keys(props.headers).map((header) => (
        <>
          {props.headers[header].split(';').map(headerEntry => (
            <div className="flex flex-row items-center border-y border-gray-800 border-solid break-words py-1">
              <EntryField>{header}</EntryField>
              <EntryField>{headerEntry}</EntryField>
            </div>
          ))}
        </>
      ))}
    </div>
    </div>
  );
};
