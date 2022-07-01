// @ts-nocheck
import Meme from "../Meme/Meme";
import React, { useState, useEffect } from "react";

export default function MainContent() {
  const [allMemes, setAllMemes] = useState([]);
  const [activeMeme, updateMeme] = useState({
    url: "./memeimg.jpg",
    topText: "",
    bottomText: "",
  });

  useEffect(() => {
    async function getMemes() {
      try {
        const memesData = await fetch("https://api.imgflip.com/get_memes");
        const { memes } = await memesData.data.json();
        setAllMemes(memes);
      } catch (err) {
        console.log(err);
      }
    }
    getMemes();
  }, []);

  function generateMeme() {
    const randomNumber = Math.floor(Math.random() * 100);
    updateMeme((prevState) => ({
      ...prevState,
      url: allMemes[randomNumber].url,
    }));
  }

  function changeText(event) {
    const { name, value, type, checked } = event.target;
    updateMeme((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <main className="main">
      <section className="form">
        <fieldset className="form_textInputs">
          <input
            onChange={changeText}
            type="text"
            name="topText"
            placeholder="Shut up"
            value={activeMeme.topText}
          />
          <input
            onChange={changeText}
            type="text"
            name="bottomText"
            placeholder="and take my money"
            value={activeMeme.bottomText}
          />
        </fieldset>
        <button onClick={generateMeme}>Get a new meme image &#128444;</button>
      </section>
      <Meme {...activeMeme} />
    </main>
  );
}
