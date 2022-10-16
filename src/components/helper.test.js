import { getContent, convertDate } from '../utils/helper'

describe('#helper functions', () => {
  it('getContent should return 10 stories', async () => {
    const data = await getContent()
    expect(data.length).toBe(10)
  })

  it('convert the date to right date format', () => {
    const date = convertDate('Sun Oct 16 2022 14:56:39 GMT-0400 (Eastern Daylight Time)')
    expect(date).toBe('October 16, 2022')
  })

  it('convert the date to right date format', () => {
    const date = convertDate('2022-10-16T22:34:07.211813Z')
    expect(date).toBe('October 16, 2022')
  })
})
