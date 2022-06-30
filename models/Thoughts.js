// create the Thoughts model using the ThoughtSchema
const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {

    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: new Date(),
      get: (date) => {
          return date.toLocaleDateString();
        },
    },
  },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const ThoughtsSchema = new Schema({
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: new Date(),
      get: (date) => {
          return date.toLocaleDateString();
        },
    },
    reactions: [ReactionSchema],
  },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Virtual to get reactions count
ThoughtsSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
  
const Thoughts = model('Thoughts', ThoughtsSchema);

// export the Thoughts model
module.exports = Thoughts;