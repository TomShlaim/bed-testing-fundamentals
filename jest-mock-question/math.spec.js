const math = require('./math');
const axios = require('axios');

describe('math module mock', () => {
  test('without mock', () => {
    const result = math.sum(1, 2);
    console.log(JSON.stringify(Object.entries(math)))
    expect(result).toBe(3);
  })
  test('module mock', () => {
    const math = jest.mock('./math');
    console.log(JSON.stringify(Object.entries(math)))
    // const result = math.sum(1, 2);
    // expect(result).toBe(3);
  })
});

describe('axios mock', () => {
  test('axios without mock', () => {
    console.log(JSON.stringify(Object.entries(axios)))
  })
  test('module mock', () => {
    const axios = jest.mock('axios');
    console.log(JSON.stringify(Object.entries(axios)))
  })
});
