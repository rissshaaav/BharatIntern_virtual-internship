import React, { useState } from "react";
import { storage } from "../../utils/Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Banner from "./Banner";
import Editor from "./Editor";
import Metadata from "./Metadata";

const Main = () => {
  const [banner, setBanner] = useState(null);
  const [bannerURL, setBannerURL] = useState("");
  const [content, setContent] = useState("");
  const [keywords, setKeywords] = useState([]);

  // const handleUpload = () => {
  //   if (!banner) {
  //     return alert("No file selected");
  //   }
  //   const storageRef = ref(storage, `images/${banner.name}`);
  //   const uploadTask = uploadBytesResumable(storageRef, banner);
  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         default:
  //           console.log("Upload is running");
  //       }
  //     },
  //     (error) => {
  //       switch (error.code) {
  //         case "storage/unauthorized":
  //           console.log("User doesn't have permission to access the object");
  //           break;
  //         case "storage/canceled":
  //           console.log("User canceled the upload");
  //           break;
  //         case "storage/unknown":
  //           console.log("Unknown error occurred, inspect error.serverResponse");
  //           break;
  //         default:
  //           console.log("uploaded successfully");
  //       }
  //     },
  //     () =>
  //       getDownloadURL(uploadTask.snapshot.ref).then((url) => {
  //         setDownloadURL(url);
  //       })
  //   );
  // };
  const handleSubmit = async () => {
    try {
      // Upload banner to Firebase Storage
      const storageRef = ref(storage, `images/banner/${banner.name}`);
      const uploadTask = uploadBytesResumable(storageRef, banner);
      uploadTask.on("state_changed", null, null,
        async () =>{
        const url =  await getDownloadURL(uploadTask.snapshot.ref);
        setBannerURL(url);
      });
      // const bannerSnapshot = await storageRef.put(banner);
      // const bannerURL = await bannerSnapshot.ref.getDownloadURL();

      // Make fetch request to store data in MongoDB
      const res = await fetch("http://localhost:3001/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          banner: bannerURL,
          blog: content,
          keywords: keywords,
        }),
      });

      if (res.ok) {
        setContent("");
        setKeywords([]);
      }
      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Banner setBanner={setBanner} />
      <Editor content={content} setContent={setContent} />
      <Metadata keywords={keywords} setKeywords={setKeywords} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Main;
