const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

const playlistFile = "playlist.json";

// Read the playlist data from the JSON file
let playlist = [];
fs.readFile(playlistFile, "utf8", (err, data) => {
  if (!err) {
    try {
      playlist = JSON.parse(data);
    } catch (error) {
      console.error("Failed to parse playlist JSON:", error);
    }
  }
});

// Write the playlist data to the JSON file
function savePlaylist() {
  fs.writeFile(playlistFile, JSON.stringify(playlist, null, 2), (err) => {
    if (err) {
      console.error("Failed to save playlist:", err);
    }
  });
}

// Add a song to the playlist
app.post("/playlist", (req, res) => {
  const { title, artists, url } = req.body;
  if (!title || !artists || !url) {
    res.status(400).json({ message: "Missing required fields" });
  } else {
    const song = { title, artists, url };
    playlist.push(song);
    savePlaylist();
    res.status(201).json({ message: "Song added to the playlist" });
  }
});

// Play a song from the playlist
app.get("/playlist/:index", (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < playlist.length) {
    const song = playlist[index];
    res.json(song);
  } else {
    res.status(404).json({ message: "Song not found" });
  }
});

// Get the list of songs from the playlist
app.get("/playlist", (req, res) => {
  res.json(playlist);
});

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

// Handle errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
