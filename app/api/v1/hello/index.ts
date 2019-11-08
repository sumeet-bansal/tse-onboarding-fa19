import express from 'express';

export const router = express.Router();

router.route('/')
  .get((req: express.Request, res: express.Response) => {
    res.json({ hello: 'world' });
  });
