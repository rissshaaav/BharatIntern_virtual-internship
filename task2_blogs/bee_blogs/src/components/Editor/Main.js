import React, { useState, useEffect } from "react";
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

  const handleSubmit = async () => {
    try {
      const storageRef = ref(storage, `images/banner/${banner.name}`);
      const uploadTask = uploadBytesResumable(storageRef, banner);
      uploadTask.on("state_changed", null, null,
        async () =>{
        const url =  await getDownloadURL(uploadTask.snapshot.ref);
        setBannerURL(url);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
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

        // if (res.ok) {
        //   setContent(""); //this and
        //   setKeywords([]); //this was causing infinite rendering
        // }
        console.log(await res.json());
      } catch (error) {
        console.log(error);
      }
    };

    if (bannerURL !== "") {
      fetchData();
    }
  }, [bannerURL, content, keywords]);
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
