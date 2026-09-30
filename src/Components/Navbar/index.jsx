import "./style.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="navbar__logo">
        VOID
      </a>

      <nav className="navbar__links">
        <a href="/">Home</a>
        <a href="#intro">About</a>
        <a href="#showcase">Showcase</a>
      </nav>

      <button className="navbar__button">
        Explore
      </button>
    </header>
  );
}