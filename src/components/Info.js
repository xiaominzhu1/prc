import React from "react";

const Info = ({ content, back }) => {
  return (
    <div>
      <ul>
        {content?.map((item, i) => {
          return (
            <li key={i} onClick={() => back()}>
              Title: {item.title} Text: {item.text}
              -- {item._id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Info;
