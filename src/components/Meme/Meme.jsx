import defaultMeme from "../../assets/memeimg.jpg";

export default function Meme() {
  return (
    <div className="meme">
      <img src={defaultMeme} alt="default meme" />
      <h4 className="meme_top-text">Shut Up</h4>
      <h4 className="meme_bottom-text">and take my money</h4>
    </div>
  );
}
