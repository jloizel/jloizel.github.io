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
          <div className={styles.header}>
            {resumeSection.header}
          </div>
          <div className={selectedFile === "education.tsx" ? styles.contentContainer2 : styles.contentContainer}>
            {resumeSection.sections?.map((section, index) => (
              <div key={index} className={selectedFile === "education.tsx" ? styles.section2 : styles.section}>
                <div className={selectedFile === "education.tsx" ? styles.subHeaderWithCircle : styles.subHeader}>
                  {section.subHeader}
                </div>
                <div className={styles.contentContainer}>
                  {section.content.map((line: string, lineIndex: number) => (
                    <div key={lineIndex}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FileTree;