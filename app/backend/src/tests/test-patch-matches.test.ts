import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import CreateMatches from '../database/models/create-matches-model';
// import tokenValidate from '../middlewares/tokenValidate';
// import CreateMatchesDTO from '../dtos/matches-type';

// import { Response } from 'superagent';

chai.use(chaiHttp);

interface PatchMock {
  message: string;
}

const { expect } = chai;

describe('PATCH/matches', () => {
  describe('update', () => {
    const patchMock = {
      message: "Finished"
    }

    afterEach(() => {
      sinon.restore();
    })

    it('should update a match', async () => {
      sinon.stub(CreateMatches, 'update').resolves([0, 'Gambiarra' as any]);

      const response = await chai.request(app).patch('/matches/1/finish').send()

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(patchMock);
    })
  })
})