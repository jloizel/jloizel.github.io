"use client";

import { useState } from "react";
import File from "./file";
import { files } from "./files";
import styles from "./filetree.module.css";
import resumeSections from '../../../public/data/resume.json';

const FileTree = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>("README.md");

  const handleClick = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const resumeSection = resumeSections.find(section => section.fileName === selectedFile);

  return (
    <div className={styles.container}>
      <div className={styles.fileContainer}>
      {files.children?.map((file) => (
        <File
          key={file.name}
          file={file}
          depth={1}
          isExpanded={file.name === "README.md"} // Expanded by default if it's README
          selectedFile={selectedFile}
          handleClick={handleClick}
          resumeSection={resumeSection}
        />
      ))}
      </div>
      {selectedFile && resumeSection && (
        <div className={styles.selectedFileContainer}>
          {selectedFile === "education" && resumeSection.sections && (
            <div className={styles.line}>
              {resumeSection.sections.map((_, index) => (
                <div
                  key={index}
                  className={styles.circle}
                  style={{ top: `${index * 39 + 15}px` }} // Adjust this value for spacing
                />
              ))}
            </div>
          )}
          <div className={styles.header}>
            {resumeSection.header}
          </div>
          {resumeSection.sections ? (
            resumeSection.sections.map((section, index) => (
              <div key={index} className={styles.section}>
                <div className={styles.subHeader}>
                  {section.subHeader}
                </div>
                <div className={styles.content}>
                  {section.content}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.content}>
              {resumeSection.content}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FileTree;