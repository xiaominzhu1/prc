import React from "react";
import Info from "./Info.js";
import { useHistory } from "react-router-dom";

const Content = ({ content }) => {
  const [type, setType] = React.useState(0);
  const history = useHistory();

  function back() {
    setType(0);
  }

  return (
    <div>
      <ul>
        {type === 0 ? (
          content.map((item, i) => {
            const path = `/posts/${item._id}`;
            return (
              <li
                key={i}
                onClick={() => {
                  history.push(path);
                  setType(1);
                }}
              >
                Title:{item.title} Text: {item.text}
              </li>
            );
          })
        ) : (
          <Info content={content} back={back} />
        )}
      </ul>
    </div>
  );
};
export default Content;
