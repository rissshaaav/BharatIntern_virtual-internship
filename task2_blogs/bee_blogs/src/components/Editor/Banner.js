import React from "react";
import { FileUploader } from "react-drag-drop-files";
const Banner = ({ setBanner, className }) => {
  const fileTypes = ["JPG", "PNG", "JPEG"];
  return (
    <div className={className}>
      <FileUploader
        handleChange={(banner) => setBanner(banner)}
        name="bannerImage"
        types={fileTypes}
        maxSize={5}
        minSize={0}
      >
        <div>
          <h3>Add a Banner for your blog</h3>
          Drag-drop files here or click to Upload blog banner
        </div>
      </FileUploader>
    </div>
  );
};

export default Banner;
