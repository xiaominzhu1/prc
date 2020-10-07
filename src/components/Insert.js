import React, { useContext } from "react";
import { ThemeContext } from "../App";
import Content from "./Content.js";

const Insert = ({
  title,
  text,
  changeTitle,
  changeText,
  content,
  sendData,
}) => {
  const bgColor = useContext(ThemeContext); // initial 'yellow'
  return (
    <div>
      <form id="postData">
        <input
          onChange={changeTitle}
          value={title}
          type="text"
          placeholder="title"
        />
        <input
          onChange={changeText}
          value={text}
          type="text"
          placeholder="text"
        />

        <button
          onClick={sendData} // also change initial Color to 'pink'
          style={{ backgroundColor: !title && !text ? bgColor : "lightblue" }}
        >
          Save to DB
        </button>
      </form>

      <div>
        <Content content={content} />
      </div>
    </div>
  );
};

export default Insert;
