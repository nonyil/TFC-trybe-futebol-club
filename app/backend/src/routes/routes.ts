import { Router } from 'express';
import GetUserController from '../controller/get-user.controller';
import CreateUserController from '../controller/create-user.controller';
import LoginSchema from '../Utils/schemas/JoiUsers';
import GetTeamsController from '../controller/get-teams.controller';
import GetTeamsByIdController from '../controller/get-teams-id.controller';
import GetMatchesController from '../controller/get-matches.controller';

const router = Router();

router.post('/login', LoginSchema.loginSchema, CreateUserController.create);

router.get('/login/validate', GetUserController.getUser);

router.get('/teams', GetTeamsController.getTeams);

router.get('/teams/:id', GetTeamsByIdController.getTeamsById);

router.get('/matches', GetMatchesController.getMatches);

// router.get('/matches', GetMatchesController.getMatches);
export default router;
