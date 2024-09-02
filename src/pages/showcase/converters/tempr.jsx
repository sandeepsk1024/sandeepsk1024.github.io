import { useState } from "react";


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
