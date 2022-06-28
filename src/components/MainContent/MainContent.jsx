import Meme from "../Meme/Meme";
import { memesData } from "../../data/memesData";

export default function MainContent() {
  function generateMeme() {
    const memesList = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(memesList[randomNumber].url);
  }

  return (
    <main className="main">
      <section className="form">
        <fieldset className="form_textInputs">
          <input type="text" id="toptext" placeholder="Shut up" />
          <input type="text" id="bottomtext" placeholder="and take my money" />
        </fieldset>
        <button onClick={generateMeme}>Get a new meme image &#128444;</button>
      </section>
      <Meme />
    </main>
  );
}
