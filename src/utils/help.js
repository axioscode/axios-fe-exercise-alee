import axios from 'axios'

export const getContent = async () => {
  try {
    const response = await axios.get('https://api.axios.com/api/render/stream/content')
    const results = response.data.results
    return results
  } catch (error) {
    console.log(error)
    return []
  }
}

export const convertDate = (publishedDate) => {
  const date = new Date(publishedDate)
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  let day = date.getDate().toString()
  day = day.length > 1 ? day : '0' + day

  return month + ' ' + day + ', ' + year
}
