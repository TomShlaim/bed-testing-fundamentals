const { fetchData } = require('./fetch-data')

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
describe('Async / Await', async () => {
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

