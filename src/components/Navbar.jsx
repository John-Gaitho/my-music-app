import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h1 >MELODIES HUB</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/playlists" >Playlists</Link>
        <Link to="/songs" >Songs</Link>
      </div>
    </nav>
  );
}
