import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Songs from "./pages/Songs";
import Navbar from "./components/Navbar";

export default function AppRouter() {
  return (
    <Router> 

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>

    
    </Router>
  );
}
