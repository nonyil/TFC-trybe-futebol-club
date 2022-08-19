import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import CreateMatches from '../database/models/create-matches-model';
import CreateTeams from '../database/models/create-teams-model';

// import { Response } from 'superagent';

chai.use(chaiHttp);

interface TestMatches extends CreateMatches {
  id: number
  homeTeam: number
  homeTeamGoals: number
  awayTeam: number
  awayTeamGoals: number
  inProgress: boolean
  teamHome: {
      "teamName": string
  }
  teamAway: {
      "teamName": string
  }
}

const { expect } = chai;

describe('GET/matches', () => {
  describe('findAll', () => {
    const matchesMock = [
      {
        "id": 1,
        "homeTeam": 16,
        "homeTeamGoals": 1,
        "awayTeam": 8,
        "awayTeamGoals": 1,
        "inProgress": false,
        "teamHome": {
          "teamName": "São Paulo"
        },
        "teamAway": {
          "teamName": "Grêmio"
        }
      },
    ]

    afterEach(() => {
      sinon.restore();
    })

    it('should return a list of matches', async () => {
      sinon.stub(CreateMatches, 'findAll').resolves(matchesMock as TestMatches[]);

      const response = await chai.request(app).get('/matches');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(matchesMock);
    })
  })
})