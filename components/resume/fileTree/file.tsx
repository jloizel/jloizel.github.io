"use client"

import { TFiles } from "./files"
import { FC, useState } from "react";

type FileProps = {
  file: TFiles;
  depth: number;
}

export default function File({ file, depth }: FileProps ): ReturnType<FC> {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsExpanded(prev => !prev)}>
        {file.children && (
          <div style={{ paddingLeft: "6px", paddingRight: "6px", width: "20px" }} >
            {isExpanded ? "-" : "+"}
          </div>
        )}
        <span className="name" style={{ paddingLeft: file.children ? "" : "20px" }} >{file.name}</span>
      </button>
      <div style={{ borderLeft: "1px solid black", margin: "5px 5px" }}>
        {isExpanded && (<div style={{ paddingLeft: `5px` }} >
          {file.children?.map((file) => (
            <File file={file} depth={depth + 1}/>
          ))}
        </div>)}
      </div>
    </>
  )
}