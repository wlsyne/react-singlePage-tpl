const ENV = process.env.NODE_ENV;
const IS_DEV = ENV === 'development';
const NEED_ANALYSIS = !!process.env.Analysis;
const NEED_SMP = !!process.env.SMP;

const { PUBLIC_PATH } = require(`./publicPath/${ENV}`);

module.exports = { PUBLIC_PATH, IS_DEV, ENV, NEED_ANALYSIS, NEED_SMP };
