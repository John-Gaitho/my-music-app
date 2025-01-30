import { useEffect, useState } from "react";
import { api } from "../api";

export default function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    api.get("/songs")
      .then(res => setSongs(res.data))
      .catch(err => console.error("Error fetching songs:", err));
  }, []);

  return (
    <div >
      <h2 >Songs</h2>
      <ul >
        {songs.map(song => (
          <li key={song.id} >{song.title} - {song.artist}</li>
        ))}
      </ul>
    </div>
  );
}
