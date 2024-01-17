import React, { useState } from "react";

const Metadata = ({ keywords, setKeywords }) => {
  const [word, setWord] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setKeywords([...keywords, word]);
      setWord("");
    }
  };
  return (
    <div>
      <h2>Blog Metadata</h2>
      <h4>This increases the reach of your blog</h4>
      <input
        type="text"
        value={word}
        placeholder="Enter keywords from your blog"
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {keywords &&
        keywords.map((keyword, index) => {
          return <p key={index}>{keyword}</p>;
        })}
    </div>
  );
};

export default Metadata;
