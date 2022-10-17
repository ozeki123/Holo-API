import mongoose from "mongoose";

const Experiences = mongoose.Schema({
  title:{
      type: String,
      required: true
  },
  price: {
      type: String,
      // required: true,
  },
  location: {
      type: String,
      // required: true
  },
  owner: {
      type: String,
      // required: true,
  },
  age: {
      type: Number
  },
  contact: {
      type: String
  },
  image: {
      type: String
  },
  description: {
      type: String,
  },

},
{
  timestamps: true
});

export default mongoose.model('Experiences', Experiences);