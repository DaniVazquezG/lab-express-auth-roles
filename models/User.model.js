const { Schema, model } = require('mongoose');
const { checkRoles } = require('../middleware/roles.middleware');
const { ENUM_ROLES } = require("../const/user.const");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: String,
    profileImg: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
    description: { type: String, default: 'No existe descripción.' },
    role: {
      type: String,
      enum: ENUM_ROLES,
      trim: true,
      default: 'Student',
    }
  },
  {
    timestamps: true
  }
);


module.exports = model('User', userSchema)
