const MMS = require('../build/mms.js');

let config = {};

try {
  config = require('./config.json');
} catch (error) {
  console.warn('custom configuration not detected, using defaults');
}

const mms = new MMS(config);

mms.process();
