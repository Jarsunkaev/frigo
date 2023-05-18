import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./UploadForm.module.css"; // Import the CSS module
import UploadButton from "./UploadButton";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., upload the file
    if (selectedFile) {
      // Perform file upload logic here
      console.log("File uploaded:", selectedFile);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps()}
          className={`${styles.dropzone} ${isDragActive ? styles.active : ""}`} // Apply the CSS module class names
        >
          <input {...getInputProps()} />
          <p>Drag and drop image here or click to select an image</p>
        </div>
        <UploadButton handleClick={handleSubmit} />
      </form>
    </div>
  );
};

export default UploadForm;
