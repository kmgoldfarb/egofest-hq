import mongoose from 'mongoose';

const PlayerSchema = new mongoose.Schema({
  player_id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
    maxlength: 30,
  },
  last_name: {
    type: String,
    required: true,
    maxlength: 30,
  },
  position: {
    type: String,
    required: true,
    maxlength: 4,
  },
  team: {
    type: String,
    required: true,
    maxlength: 4,
  },
  age: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Player', PlayerSchema);
