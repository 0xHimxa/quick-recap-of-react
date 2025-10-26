import React, { useEffect, useState } from "react";

import Axios from "axios";




// you can sue somthing like userInfo?.name
// display element in the HTML  it only work wen user info is not null

const Effect_preview = () => {
  const [text, setText] = useState("");

  const getcatfact = async () => {
    try {
    //   const res = await fetch("https://catfact.ninja/fact?max_length=");
    //   const data = await res.json();

    const res = await Axios.get("https://catfact.ninja/fact?max_length=");
    const data = res.data;
      console.log(data);
      setText(data.fact);
      return data;
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    console.log(text);
    getcatfact();
  }, []);

  return (
    <>
      <div>Effect</div>

      <button onClick={getcatfact}> generate cat fact</button>

      <h1>{text}</h1>
    </>
  );
};

export default Effect_preview;
