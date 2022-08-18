import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';
import Users from '../database/models/create-users-model';
import JwtService from '../Utils/token/jwt.service';

chai.use(chaiHttp);

const { expect } = chai;

describe('POST/login', () => {
  describe('success', () => {
    const loginMock = {
      "email": "admin@admin.com",
      "password": "secret_admin"
    }

    afterEach(() => {
      sinon.restore();
    });

    
    it('should return a token', async () => {
      sinon.stub(Users, 'findOne').resolves(loginMock as Users);
      sinon.stub(JwtService, 'create').returns('token');

      const response = await chai.request(app).post('/login').send(loginMock);
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({token:'token'});
    });

    it('should not return a token', async () => {
      sinon.stub(Users, 'findOne').resolves(null);

      const response = await chai.request(app).post('/login').send(loginMock);
      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({message:'Incorrect email or password'});
    });
  })
});
