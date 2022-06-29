import Meme from "../Meme/Meme";
import { memesData } from "../../data/memesData";
// @ts-ignore
import React, { useState } from "react";

export default function MainContent() {
  const [activeMeme, updateMeme] = useState({
    url: "./memeimg.jpg",
    topText: "",
    bottomText: "",
  });

  function generateMeme() {
    const memesList = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * 100);
    updateMeme((prevState) => ({
      ...prevState,
      url: memesList[randomNumber].url,
    }));
  }

  function changeText(event, element) {
    if (element === "toptext") {
      updateMeme((prevState) => ({
        ...prevState,
        topText: event.target.value,
      }));
    } else if (element === "bottomtext") {
      updateMeme((prevState) => ({
        ...prevState,
        bottomText: event.target.value,
      }));
    }
  }

  return (
    <main className="main">
      <section className="form">
        <fieldset className="form_textInputs">
          <input
            onChange={(e) => changeText(e, "toptext")}
            type="text"
            id="toptext"
            placeholder="Shut up"
          />
          <input
            onChange={(e) => changeText(e, "bottomtext")}
            type="text"
            id="bottomtext"
            placeholder="and take my money"
          />
        </fieldset>
        <button onClick={generateMeme}>Get a new meme image &#128444;</button>
      </section>
      <Meme {...activeMeme} />
    </main>
  );
}
