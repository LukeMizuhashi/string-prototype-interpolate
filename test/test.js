require('../src/main.js');
const assert = require('chai').assert;

describe(
  'String.prototype.interpolate',
  () => {
    const description = 'Should replace all instances of ${namedVariables} with matching { namedKeys: \'with their associated values\' }.';

    it(description,() => {
      const template = 'This is a ${variable}.';
      const result = template.interpolate({ variable: 'test' });
      const expected = 'This is a test.';
      assert(result === expected,'Is broken, yo.');
    });
  }
);
    
