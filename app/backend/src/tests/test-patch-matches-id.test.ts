import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import CreateMatches from '../database/models/create-matches-model';


chai.use(chaiHttp);


const { expect } = chai;

describe('PATCH/matches/:id', () => {
  describe('update by id', () => {
    const mock = {
      homeTeamGoals: 3,
      awayTeamGoals: 1
    }

    afterEach(() => {
      sinon.restore();
    })

    it('should update a score in match', async () => {
      sinon.stub(CreateMatches, 'update');

      const response = await chai.request(app).patch('/matches/1').send(mock);

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal('');
    })
  })
})