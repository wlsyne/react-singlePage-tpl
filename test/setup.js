const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromised = require('chai-as-promised');
const assertWhen = require('./helpers/assertWhen');
const sleep = require('./helpers/sleep');

const sandbox = sinon.createSandbox();

chai.use(sinonChai);
chai.use(chaiAsPromised);

global.expect = chai.expect;
global.sinon = sandbox;
global.assertWhen = assertWhen;
global.sleep = sleep;

process.on('unhandledRejection', () => {});

afterEach(() => {
  sandbox.restore();
  sandbox.reset();
});
