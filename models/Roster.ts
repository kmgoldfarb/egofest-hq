import mongoose from 'mongoose';

const RosterSchema = new mongoose.Schema({
  starters: {
    type: [String],
    required: true,
  },
  players: {
    type: [String],
    required: true,
  },
  reserve: {
    type: [String],
  },
  taxi: {
    type: [String],
  },
  wins: {
    type: Number,
    required: true,
  },
  ties: {
    type: Number,
    required: true,
  },
  losses: {
    type: Number,
    required: true,
  },
  points_for: {
    type: Number,
    required: true,
  },
  points_for_decimal: {
    type: Number,
  },
  points_against: {
    type: Number,
    required: true,
  },
  points_against_decimal: {
    type: Number,
  },
  roster_id: {
    type: Number,
    required: true,
  },
  owner_id: {
    type: String,
    required: true,
  },
  total_moves: {
    type: Number,
    required: true,
  },
  streak: {
    type: String,
  },
});

export default mongoose.models.Roster || mongoose.model('Roster', RosterSchema);
