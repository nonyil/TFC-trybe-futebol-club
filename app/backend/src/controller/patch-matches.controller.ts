import { Request, Response } from 'express';
import PatchMatchesService from '../services/patch-matches.service';

export default class PatchMatchesController {
  static async patch(req: Request, res: Response) {
    const { id } = req.params;
    const matchUpdate = await PatchMatchesService.Patch(id);
    if (matchUpdate) {
      return res.status(200).json({ message: 'Finished' });
    }
  }
  // return res.status(200).json(matchUpdate);
}
