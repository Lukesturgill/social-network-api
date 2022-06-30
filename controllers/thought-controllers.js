const { Thoughts } = require('../models');

const thoughtsController = {
   // get all pizzas
   getAllThoughts(req, res) {
    Thoughts.find({})
      .then(dbThoughtsData => res.json(dbThoughtsData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one Thoughts by id
  getThoughtsById({ params }, res) {
    Thoughts.findOne({ _id: params.id })
      .then(dbThoughtsData => {
        // If no Thoughts is found, send 404
        if (!dbThoughtsData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtsData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },
};


module.exports = thoughtsController;