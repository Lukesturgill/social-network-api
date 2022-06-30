// create the Thoughts model using the ThoughtSchema
const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    thoughtName: {
      type: String
    },
    createdBy: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    size: {
      type: String,
      default: 'Large'
    },
    toppings: []
  });

// export the Thoughts model
module.exports = Thoughts;