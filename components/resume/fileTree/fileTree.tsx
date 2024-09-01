"use client";

import { useState } from "react";
import File from "./file";
import { files } from "./files";
import styles from "./filetree.module.css";
import resumeSections from '../../../public/data/resume.json';
import OrbitingCircles from "../../home/orbitingCircles/orbitingCircles";
import { FaFileDownload } from "react-icons/fa";

const FileTree = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>("README.md");

  const handleClick = (fileName: string) => {
    setSelectedFile(fileName);
  };

  const resumeSection = resumeSections.find(section => section.fileName === selectedFile);

  const timeline = selectedFile === "education.tsx" || selectedFile === "workExperience.tsx";

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
          <div className={timeline ? styles.contentContainer2 : styles.contentContainer}>
            {selectedFile === "package.json" ? (
              <div className={styles.jsonContent}>
                {resumeSection.sections?.[0]?.content.join('\n')}
              </div>
            ) : (
              resumeSection.sections?.map((section, index) => (
                <div key={index} className={timeline ? styles.section2 : styles.section}>
                  <div className={timeline ? styles.subHeaderWithCircle : styles.subHeader}>
                    {section.subHeader}
                  </div>
                  <div className={styles.contentBox}>
                    {section.content.map((line: string, lineIndex: number) => (
                      <div key={lineIndex}>
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
            {selectedFile === "portrait.jpg" && (
              <img src="/images/pp.png" alt="portrait picture" className={styles.image}/>
            )}
            {selectedFile === "skills.tsx" && (
              <OrbitingCircles/>
            )}
            {/* {selectedFile === "resume.pdf" && (
              <div className={styles.downloadContainer}> 
                <a href="/resume.pdf" download className={styles.downloadButton}>
                  <FaFileDownload />
                </a>
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default FileTree;
