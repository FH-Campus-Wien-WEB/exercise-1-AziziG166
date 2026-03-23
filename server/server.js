const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movieData = [
    {
      "Title": "Scarface",
      "Released": "1983-12-09",
      "Runtime": 170,
      "Genres": ["Crime", "Drama"],
      "Directors": ["Brian De Palma"],
      "Writers": ["Oliver Stone"],
      "Actors": ["Al Pacino", "Michelle Pfeiffer", "Steven Bauer"],
      "Plot": "In the 1980s, a determined criminal-minded Cuban immigrant becomes the biggest drug smuggler in Miami, and is eventually undone by his own drug addiction.",
      "Poster": "/images/scarface.jpeg",
      "Metascore": 65,
      "imdbRating": 8.3
    },
    {
      "Title": "The Equalizer",
      "Released": "2014-09-26",
      "Runtime": 132,
      "Genres": ["Action", "Crime", "Thriller"],
      "Directors": ["Antoine Fuqua"],
      "Writers": ["Richard Wenk"],
      "Actors": ["Denzel Washington", "Marton Csokas", "Chloë Grace Moretz"],
      "Plot": "A man who believes he has put his past behind him cannot stand idly by when he meets a young girl under the control of ultra-violent Russian gangsters.",
      "Poster": "/images/equalizer.jpg",
      "Metascore": 57,
      "imdbRating": 7.2
    },
    {
      "Title": "Ghost Rider",
      "Released": "2007-02-16",
      "Runtime": 110,
      "Genres": ["Action", "Fantasy", "Thriller"],
      "Directors": ["Mark Steven Johnson"],
      "Writers": ["Mark Steven Johnson"],
      "Actors": ["Nicolas Cage", "Eva Mendes", "Sam Elliott"],
      "Plot": "A motorcycle stuntman who sold his soul becomes a supernatural agent of vengeance.",
      "Poster": "/images/ghostrider.jpg",
      "Metascore": 35,
      "imdbRating": 5.3
    }
  ];
  res.json(movieData);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

