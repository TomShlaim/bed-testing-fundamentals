const { fetchData } = require('../async/fetch-data')

/*
Those two describe are equal. So why do we need beforeAll?
 */
describe('Without before all', () => {
  const data = 'data'

  test('test 1', () => {
    console.log('This is my data : ', data)
    expect(true).toBe(true)
  })
})
describe('With before all', () => {
  let data
  beforeAll(() => {
    console.log('before all')
    data = 'data'
  })
  test('test 1', () => {
    console.log('This is my data : ', data)
    expect(true).toBe(true)
  })
})

/*
Async
 */
describe.only('Without before all', async () => {
  const data = await fetchData()

  test('test 1', () => {
    console.log('This is my data : ', data)
    expect(true).toBe(true)
  })
})
describe('With before all', () => {
  let data
  beforeAll(async () => {
    console.log('before all')
    data = await fetchData()
  })
  test('test 1', () => {
    console.log('This is my data : ', data)
    expect(true).toBe(true)
  })
})

