const ENV = process.env.NODE_ENV;
const IS_DEV = ENV === 'development';
const NEED_ANALYSIS = !!process.env.Analysis;

const { PUBLIC_PATH } = require(`./publicPath/${ENV}`);

module.exports = { PUBLIC_PATH, IS_DEV, ENV, NEED_ANALYSIS };
