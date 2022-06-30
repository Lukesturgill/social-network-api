// create the User model using the UserSchema
const { Schema, model } = require('mongoose');
const { Thoughts } = require('.');

const UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: Thoughts
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: User
    }
  });

// export the User model
module.exports = User;