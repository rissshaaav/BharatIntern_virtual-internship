import React, { useState } from "react";
import metadataStyles from "./metadataStyles.module.css";

const Metadata = ({ keywords, setKeywords }) => {
  const [word, setWord] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setKeywords([...keywords, word]);
      setWord("");
    }
  };
  const removeKeyword = (index) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };
  return (
    <div className={metadataStyles.metadata}>
      <h2>Metadata</h2>
      <p>This increases the reach of your blog</p>
      <input
        className={metadataStyles.input}
        type="text"
        value={word}
        placeholder="Enter keywords from your blog"
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className={metadataStyles.keywordContainer}>
        {keywords &&
          keywords.map((keyword, index) => {
            return (
              <div key={index} className={metadataStyles.keyword}>
                <div className={metadataStyles.cut} onClick={()=>removeKeyword(index)}><span>✖</span></div>
                <div className={metadataStyles.keywordText}>{keyword}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Metadata;
