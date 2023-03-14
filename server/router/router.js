const express = require('express');
const router = express.Router();
const Participant = require('../db-models/participants');

//Get all
router.get('/books', async (req, res) => {
    try {
      const books = await Participant.find({});
      res.send(books);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching books');
    }
  });

//Get one
router.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
      const book = await Participant.findById(bookId);
      if (!book) {
        res.status(404).send('Book not found');
      } else {
        res.send(book);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Error fetching book');
    }
  });

//Post
router.post('/post-user', (req, res) => {
const newParticipant = new Participant({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contribution: req.body.contribution,
    date: req.body.date,
    issuer: req.body.issuer,
});
newParticipant.save().then((participant) => res.json(participant));
});

module.exports = router;