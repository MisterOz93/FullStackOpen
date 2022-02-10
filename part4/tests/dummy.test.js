const listHelper = require('../utils/list_helper')

describe('listHelper', () => {
  test('dummy returns 1', () => {
    const blogs = []
    expect(listHelper.dummy(blogs)).toEqual(1)
  })
})    