describe('The toBe matcher compares with ===', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
  test('object assignment', () => {
    const data = {
      one: 1,
    }
    data['two'] = 2

    expect(data).toBe({
      one: 1, two: 2,
    })
  })
})
describe('isEqual', () => {
  test('object assignment', () => {
    const data = {
      one: 1,
    }
    data['two'] = 2

    expect(data).toEqual({
      one: 1, two: 2,
    })
  })
})
describe('Not equal', () => {
  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0)
      }
    }
  })
})
describe('truthiness', () => {
  test('null', () => {
    const n = null

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
  })

  test('zero', () => {
    const z = 0

    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
  })
})
describe('numbers', () => {
  test('two plus two', () => {
    const value = 2 + 2

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    expect(value).toBe(4)
    expect(value).toEqual(4)
  })
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2

    expect(value).toBeCloseTo(0.3)
  })
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    //expect(value).toBe(0.3);           This won't work because of rounding
    // error
    expect(value).toBeCloseTo(0.3) // This works.
  })
})
describe('strings', () => {
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/)
  })
})
describe('arrays', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ]
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
  })
})
describe('exceptions', () => {
  function compileAndroidCode () {
    throw new Error('you are using the wrong JDK')
  }

  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow()
    expect(() => compileAndroidCode()).toThrow(Error)

    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
    expect(() => compileAndroidCode()).toThrow(/JDK/)
  })
})

/*
More matchers right here :
https://jestjs.io/docs/expect
*/

