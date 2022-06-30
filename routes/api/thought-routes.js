const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction
  } = require('../../controllers/thought-controllers');

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThoughts);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

  router
  .route('/:thoughtId/:reactionId')
  .post(addReaction);

module.exports = router;