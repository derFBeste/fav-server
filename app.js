import express from 'express'
import cors from 'cors'
import {
  randAnimalType,
  randBook,
  randColor,
  randDrinks,
  randEmail,
  randFood,
  randFullName,
  randMovie,
  randMusicGenre,
  randNumber,
  randQuote,
  randSong,
  randSportsTeam,
  randSuperheroName,
  randUuid,
  randWord
} from '@ngneat/falso'

const app = express()
const port = 9001

app.use(cors())
app.options('*', cors())

app.get('/', (req, res) => {
  res.send('Yo!')
})

function user (userCount = 1) {
  return {
    id: randUuid(),
    name: randFullName(),
    email: randEmail(),
    team: randSportsTeam(),
    animal: randAnimalType(),
    musicGenre: randMusicGenre(),
    song: randSong(),
    book: randBook().title,
    word: randWord(),
    color: randColor(),
    movie: randMovie(),
    drink: randDrinks(),
    food: randFood(),
    number: randNumber({ min: 10, max: 100 }),
    superHero: randSuperheroName(),
    quote: randQuote()
  }
}

app.get('/users', (req, res) => {
  res.json([user(), user(), user()])
})

app.listen(port, () => {
  console.info(`Serving on port ${port}`)
})
