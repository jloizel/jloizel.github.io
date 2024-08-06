import Entry from "./file";
import { files } from "./files";
import { FC } from "react";

export default function FileTree() {
  return (
    <div style={{ padding: "10px" }}>
      {files.children?.map((file) => (
        <Entry file={file} depth={1}/>
      ))}      
    </div>
  );
}