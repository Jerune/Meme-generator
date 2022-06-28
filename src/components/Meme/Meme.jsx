export default function Meme({ url, topText, bottomText }) {
  return (
    <div className="meme">
      <img src={url} alt="default meme" />
      <h4 className="meme_top-text">{topText}</h4>
      <h4 className="meme_bottom-text">{bottomText}</h4>
    </div>
  );
}
