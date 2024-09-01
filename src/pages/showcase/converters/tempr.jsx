import { useState } from "react";

import { get_encoding } from "tiktoken";
const encoding = get_encoding("cl100k_base");



export default function Temperature() {
  const [userInput, setUserInput] = useState("");
  return (
    <>
      <div>
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        ></input>
      </div>
      <div></div>
    </>
  );
}
