import Meme from "../Meme/Meme";

export default function MainContent() {
  return (
    <main className="main">
      <form className="form">
        <fieldset className="form_textInputs">
          <input type="text" id="toptext" placeholder="Shut up" />
          <input type="text" id="bottomtext" placeholder="and take my money" />
        </fieldset>
        <button type="submit">Get a new meme image &#128444;</button>
      </form>
      <Meme />
    </main>
  );
}
