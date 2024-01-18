import React, { useState, useEffect } from "react";
import { storage } from "../../utils/Firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Banner from "./Banner";
import Editor from "./Editor";
import Metadata from "./Metadata";
import styles from "./styles.module.css";

const Main = () => {
  const [banner, setBanner] = useState(null);
  const [bannerURL, setBannerURL] = useState("");
  const [content, setContent] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleSubmit = async () => {
    // if (!banner) {
    //   return alert("No file selected");
    // }
    try {
      const storageRef = ref(storage, `images/banner/${banner.name}`);
      const uploadTask = uploadBytesResumable(storageRef, banner);
      uploadTask.on("state_changed", null, null, async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
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

        if (res.ok) {
          setContent("");
          setKeywords([]);
          setBanner(null);
        }
        console.log(await res.json());
      } catch (error) {
        console.log(error);
      }
    };

    if (bannerURL !== "" && content !== "" && keywords.length > 0) {
      fetchData();
    }
  }, [bannerURL, content, keywords]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Banner setBanner={setBanner} className={styles.banner} />
        <Editor
          content={content}
          setContent={setContent}
          className={styles.editor}
        />
      </div>
      <div className={styles.right}>
        <Metadata
          keywords={keywords}
          setKeywords={setKeywords}
          className={styles.metadata}
        />
        <button onClick={handleSubmit} className={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Main;
