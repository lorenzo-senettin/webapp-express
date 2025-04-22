const db = require("../data/db");

// GET /movies
function index(req, res) {
  db.query("SELECT * FROM movies", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Errore server" });
    }
    res.json(results);
  });
}

// SHOW /movies/:id
function show(req, res) {
  const id = req.params.id;
  db.query("SELECT * FROM movies WHERE id = ?", [id], (err, movies) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Errore server" });
    }
    if (movies.length === 0) {
      return res.status(404).json({ error: "Movie non trovato" });
    }

    db.query(
      "SELECT id, name, vote, text, created_at FROM reviews WHERE movie_id = ?",
      [id],
      (err2, reviews) => {
        if (err2) {
          console.error(err2);
          return res.status(500).json({ error: "Errore server" });
        }
        res.json({ ...movies[0], reviews });
      }
    );
  });
}

module.exports = {
  index,
  show,
};
