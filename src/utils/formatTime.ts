const formatTime = (time: string) => {
  const hour = time.slice(0, 2)
  const minute = time.slice(2, 4)
  const formattedTime = `${hour}:${minute}`
  return formattedTime
}

export default formatTime
