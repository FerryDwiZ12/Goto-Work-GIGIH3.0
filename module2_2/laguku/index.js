const express = require("express");
const app = express();
const port = 3000;

let playlist = [];

app.use(express.json());

app.get("/playlist", (req, res) => {
  res.send(playlist);
  res.status(200);
});

app.post("/playlist", (req, res) => {
  const { title, artists, url } = req.body;

  const song = {
    title,
    artists,
    url,
  };

  playlist.push(song);

  res.send("Lagu berhasil di post");
  res.status(201);
});

app.put("/playlist/:id", (req, res) => {
  res.send("Berhasil meng-update data");
  res.status(200);
});

app.delete("/playlist/:id", (req, res) => {
  res.send("Berhasil menghapus data");
  res.status(202);
});

playlist.push({
  title: "Rindu Dalam Hati",
  artists: ["Archie Marry Me"],
  url: "https://open.spotify.com/track/5Flx8onuwdLOulE0Jg1sHO",
});

playlist.push({
  title: "Kau Adalah",
  artists: ["Isyana Sarasvati", "Rayi Putra"],
  url: "https://open.spotify.com/track/5Cax5Xa3UP6mKHKTtgN6Lt",
});

playlist.push({
  title: "Menunggu Kamu",
  artists: ["Anji"],
  url: "https://open.spotify.com/track/2RiBcmhirbPfQWlVZ2YRgf",
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
