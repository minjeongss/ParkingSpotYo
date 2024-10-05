import useStarStore from '../stores/starStore'

const getStarLength = () => {
  const starLength = useStarStore.getState().star?.length
  let isStarLengthFull = false
  if (starLength) {
    if (starLength < 20) {
      isStarLengthFull = false
    } else {
      isStarLengthFull = true
    }
  } else {
    isStarLengthFull = false
  }
  return isStarLengthFull
}

export default getStarLength
