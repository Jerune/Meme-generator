import logo from "../../assets/meme-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="meme logo" />
      <h1>Meme Generator</h1>
      <h2>React Course - Project 3</h2>
    </header>
  );
}
