import CreateTeams from '../database/models/create-teams-model';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET/teams', () => {
  describe('findAll', () => {
    const teamMock = [{
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "teamName": "Bahia"
    }];

    afterEach(() => {
      sinon.restore();
    });

    it('shoul return a list of teams', async () => {
      sinon.stub(CreateTeams, 'findAll').resolves(teamMock as CreateTeams[]);
      
      const response = await chai.request(app).get('/teams');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(teamMock);
    })
  })
})