import TokenService from '../middlewares/token';
import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import CreateMatches from '../database/models/create-matches-model';
import JwtService from '../Utils/token/jwt.service';
// import tokenValidate from '../middlewares/tokenValidate';
// import CreateMatchesDTO from '../dtos/matches-type';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST/matches', () => {
  describe('create', () => {
    const matchesMock = {
      inProgress: false,
      id: 49,
      homeTeam: 16,
      awayTeam: 8,
      homeTeamGoals: 2,
      awayTeamGoals: 2
    }

    const matchesMock2 = {
      inProgress: false,
      id: 49,
      homeTeam: 16,
      awayTeam: 16,
      homeTeamGoals: 2,
      awayTeamGoals: 2
    }

    const matchesMock3 = {
      inProgress: false,
      id: 49,
      homeTeam: 200,
      awayTeam: 400,
      homeTeamGoals: 2,
      awayTeamGoals: 2
    }


    afterEach(() => {
      sinon.restore();
    })

    it('should create a one matche', async () => {
      sinon.stub(CreateMatches, 'create').resolves(matchesMock as CreateMatches);
      sinon.stub(JwtService, 'verify').resolves();
      sinon.stub(TokenService, 'verifyToken').resolves();
      
      
      const response = await chai.request(app).post('/matches').send(matchesMock)
        .set('authorization', 'token' );
      
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.deep.equal(matchesMock);
    })

    it('should return an error', async () => {
      sinon.stub(JwtService, 'verify').resolves();
      sinon.stub(TokenService, 'verifyToken').resolves();
      // sinon.stub(CreateMatches, 'create').resolves();
      
      const response = await chai.request(app).post('/matches').send(matchesMock2)
        .set('authorization', 'token' );
      
      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({message: 'It is not possible to create a match with two equal teams'})
    })

    it('should return an error', async () => {
      sinon.stub(CreateMatches, 'create').resolves();
      sinon.stub(JwtService, 'verify').resolves();
      sinon.stub(TokenService, 'verifyToken').resolves();
      
      const response = await chai.request(app).post('/matches').send(matchesMock3)
        .set('authorization', 'token' );
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({message: 'There is no team with such id!'})
    })
  }) 
})
