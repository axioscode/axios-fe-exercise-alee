import { getContent, convertDate } from '../utils/help'

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
    const date = convertDate('Sun Oct 19 2022 14:56:39 GMT-0400 (Eastern Daylight Time)')
    expect(date).toBe('October 19, 2022')
  })
})
