import mongoose from "mongoose";

// Create a schema for the user
const userSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
    },
    phoneNumber: String,
    dob: Date,
    password: {
      type: String,
      required: true,
    }
}, {
    // Automatically create createdAt and updatedAt fields
     timestamps: true
})

// Create a model for the user
const User = mongoose.model('User', userSchema, 'Users');

export default User;