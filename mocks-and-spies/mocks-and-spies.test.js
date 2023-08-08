const { forEach, getGuru, putGuru } = require('./functions-to-mock')
const axios = require('axios')

describe('mock', () => {
  describe('forEach mock function', () => {
    const mockCallback = jest.fn(x => 42 + x)
    // console.log(JSON.stringify(mockCallback))
    // console.log(mockCallback.toString())
    // console.log(typeof mockCallback)

    test('forEach mock function', () => {
      forEach([0, 1], mockCallback)

      // The mock function was called twice
      expect(mockCallback.mock.calls).toHaveLength(2)

      // The first argument of the first call to the function was 0
      expect(mockCallback.mock.calls[0][0]).toBe(0)

      // The first argument of the second call to the function was 1
      expect(mockCallback.mock.calls[1][0]).toBe(1)

      // The return value of the first call to the function was 42
      expect(mockCallback.mock.results[0].value).toBe(42)

      // console.log(JSON.stringify(mockCallback.mock))
    })
  })
  describe('mock return value', () => {
    test('mock return value', () => {
      const myMock = jest.fn()

      myMock.mockReturnValueOnce(10).
        mockReturnValueOnce('x').
        mockReturnValue(true)

      // console.log(myMock(), myMock(), myMock(), myMock())
    })
  })
  describe('mock implementation', () => {
    test('mock implementation', () => {
      const myMockFn = jest.fn().mockImplementation((a, b) => {return a + b})
      const myMockFn2 = jest.fn().
        mockImplementationOnce((a, b) => {return a + b}).
        mockImplementationOnce((a, b) => {return a - b})

      expect(myMockFn(1, 3)).toBe(4)
      expect(myMockFn2(2, 3)).toBe(5)
      expect(myMockFn2(2, 3)).toBe(-1)
    })
  })
  describe('mock modules',  () => {
    test('should fetch users', async () => {
      jest.mock('axios');
      axios.get = jest.fn().mockResolvedValue({data: [{name: 'Bob'}]});
      const response = await getGuru();
      console.log(response);
      const response2 = await putGuru();
      console.log(response2)
    })
  })
})
describe('spy', () => {
  test('should fetch users', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({data: [{name: 'Bob'}]});
    const response = await getGuru();
    console.log(response);
  })
})

