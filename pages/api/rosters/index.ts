import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utilities/mongo';
import Roster from '../../../models/Roster';
import { truncate } from 'fs';

interface Team {
  starters: string[];
  players: string[];
  reserve?: string[];
  taxi?: string[];
  wins: number;
  ties: number;
  losses: number;
  points_for: number;
  points_for_decimal?: number;
  points_against: number;
  points_against_decimal?: number;
  roster_id: number;
  owner_id: string;
  total_moves: number;
  streak?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  const db = await dbConnect();

  if (method === 'GET') {
    try {
      const response = await fetch(
        'https://api.sleeper.app/v1/league/799721799230271488/rosters'
      );
      const data = await response.json();
      data.map((team: Team) => {
        const filter = team.roster_id;
        const update = new Roster({
          starters: team.starters,
          players: team.players,
          reserve: team.reserve,
          taxi: team.taxi,
          wins: team.wins,
          ties: team.ties,
          losses: team.losses,
          points_for: team.points_for,
          points_for_decimal: team.points_against_decimal,
          points_against: team.points_against,
          points_against_decimal: team.points_against_decimal,
          roster_id: team.roster_id,
          owner_id: team.owner_id,
          total_moves: team.total_moves,
          streak: team.streak,
        });
        let roster = db.findOneAndUpdate(filter, update, {
          new: true,
          upsert: true,
        });
        console.log(roster);
      });
      res.status(200).json({ data });
    } catch (err) {
      res.status(500).json({ err });
    }
  }
}
