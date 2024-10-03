import styled from '@emotion/styled'

const Input = styled.input({
  width: '100%',
  border: '2px solid #4395F6',
  borderRadius: '5px',
  backgroundImage: 'url("/src/assets/search.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 10px top 50%',
  padding: '1rem 1rem 1rem 2rem',
  color: 'rgba(0,0,0/25%)',
  fontSize: '15px',
  margin: '0 0 1rem 0',
})
const SearchRegion = () => {
  return (
    <Input
      type="text"
      placeholder="자치구를 입력해주세요 (예) 강남구, 종로구 등)"
    />
  )
}

export default SearchRegion
