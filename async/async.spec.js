const { fetchData, fetchWithAxios } = require('./fetch-data')
const axios = require('axios')

describe('Promises', () => {
  test('the data is retrieved', () => {
    return fetchData().then(data => {
      expect(data).toBe('some data')
    })
  })
  test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error')
  })
})
describe('Async / Await', () => {
  test('the data is retrieved', async () => {
    const data = await fetchData()
    expect(data).toBe('some data')
  })
  test('the fetch fails with an error', async () => {
    expect.assertions(1)
    try {
      await fetchData()
    }
    catch (e) {
      expect(e).toMatch('error')
    }
  })
})
describe('Playing with errors', () => {
  test('the fetch fails with an error', async () => {
    try {
      await fetchWithAxios()
    }
    catch (e) {
      expect(e).toMatch('error')
    }
  })
  test.only('the fetch fails with an error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce('error')
    const postSpy = jest.spyOn(axios, 'post').mockResolvedValue({})
    await fetchWithAxios()
    expect(postSpy).toHaveBeenCalledTimes(1);
  })
})

