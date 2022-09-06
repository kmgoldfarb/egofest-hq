import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../utilities/mongo';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  dbConnect();

  if (method === 'GET') {
    try {
    } catch (err) {
      res.status(500);
    }
  }
}
