import { Request, Response } from 'express';
import PatchMatchByIdService from '../services/patch-matches-id.service';

export default class PatchMatchesByIdController {
  static async patch(req: Request, res: Response) {
    const { id } = req.params;
    const score = req.body;
    const matchUpdateById = await PatchMatchByIdService.Patch(id, score);

    return res.status(200).json(matchUpdateById);
  }
}
