import React, { useState } from "react";
import Banner from "./Banner";
import Editor from "./Editor";
import Metadata from "./Metadata";

const Main = () => {
  const [banner, setBanner] = useState(null);
  const [content, setContent] = useState("");
  const [keywords, setKeywords] = useState([]);

  // const handleSubmit = async () => {
  //   try {
  //     const res = await fetch("http://localhost:3001/write", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ blog: content }),
  //     });

  //     if (res.ok) {
  //       setContent("");
  //     }
  //     console.log(res.json());
  //     console.log(image);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleClick = ()=> {
    console.log(banner);
    console.log(content);
    console.log(keywords)
  }
  return (
    <div>
      <Banner setBanner={setBanner} />
      <Editor content={content} setContent={setContent}/>
      <Metadata keywords={keywords} setKeywords={setKeywords}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Main;
