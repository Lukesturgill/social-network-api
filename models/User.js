// create the User model using the UserSchema
const { Schema, model, Types } = require('mongoose');

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
      ref: 'Thoughts'
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Virtual to get friends count.
UserSchema.virtual('friendsVirtual').get(function() {
    return User.friends;
});
  
  const User = model('User', UserSchema);
// export the User model
module.exports = User;