import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

// import { Response } from 'superagent';
import Users from '../database/models/create-users-model';
import JwtService from '../Utils/token/jwt.service';

chai.use(chaiHttp);

const { expect } = chai;

describe('GET/login/validate', () => {
  describe('success', () => {
    const getMock = {
      "email": "admin@admin.com",
      "password": "secret_admin",
      "role": "admin"
    }

    afterEach(() => {
      sinon.restore();
    });

    it('should return a user', async () => {
      sinon.stub(Users, 'findOne').resolves(getMock as Users);
      sinon.stub(JwtService, 'verify').returns(getMock);

      const response = await chai.request(app).get('/login/validate')
        .set('authorization', 'token' );
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({role: getMock.role});
    });
    
    it('should not return a token', async () => {
      sinon.stub(JwtService, 'verify').resolves(null);
      sinon.stub(Users, 'findOne').resolves(null);
      
      const response = await chai.request(app).get('/login/validate')

      expect(response.status).to.be.equal(401);
      expect(response.body).to.be.deep.equal({message: 'token not found'})
    });

    it('should not return a user', async () => {
      sinon.stub(JwtService, 'verify').resolves(null);
      sinon.stub(Users, 'findOne').resolves(null);
      
      const response = await chai.request(app).get('/login/validate')
        .set('authorization', 'token' );

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({message: 'User not found'})
    });
  })
})