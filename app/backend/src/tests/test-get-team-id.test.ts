import CreateTeams from '../database/models/create-teams-model';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET/teams/:id', () => {
  describe('findAll', () => {
    const teamMockId = {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    }

    afterEach(() => {
      sinon.restore();
    });

    it('should return a one team', async () => {
      sinon.stub(CreateTeams, 'findOne').resolves(teamMockId as CreateTeams);

      const response = await chai.request(app).get('/teams/2');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamMockId);
    })
  })
})