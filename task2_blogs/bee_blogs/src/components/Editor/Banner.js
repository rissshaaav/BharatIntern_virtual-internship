import React from "react";
import { FileUploader } from "react-drag-drop-files";
const Banner = ({ setBanner }) => {
  const fileTypes = ["JPG", "PNG", "JPEG"];
  return (
    <div>
      <FileUploader
        handleChange={(banner) => setBanner(banner)}
        name="bannerImage"
        types={fileTypes}
        maxSize={5}
        minSize={0}
      ></FileUploader>
    </div>
  );
};

export default Banner;
