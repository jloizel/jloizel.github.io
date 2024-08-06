"use client";

import { useState } from "react";
import Entry from "./file";
import { files } from "./files";
import styles from "./filetree.module.css";
import resumeSections from '../../../public/data/resume.json';

const FileTree = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const handleClick = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const resumeSection = resumeSections.find(section => section.fileName === selectedFile);

  return (
    <div className={styles.container}>
      <div>
      {files.children?.map((file) => (
        <Entry
          key={file.name}
          file={file}
          depth={1}
          isExpanded={false} // Initial state, can be managed locally in File component
          selectedFile={selectedFile}
          handleClick={handleClick}
          resumeSection={resumeSection}
        />
      ))}
      </div>
      {selectedFile && resumeSection && (
        <div className={styles.selectedFileContainer}>
          <div className={styles.header}>
            {resumeSection.header}
          </div>
          <div className={styles.content}>
            {resumeSection.content}
          </div>
        </div>
      )}
    </div>
  );
}

export default FileTree;
