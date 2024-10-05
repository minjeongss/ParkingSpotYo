import styled from '@emotion/styled'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  height: '100vh',
  margin: 'auto',
})
export const InnerContainer = styled.div({
  width: '85%',
  margin: 'auto',
})
export const ListItemContainer = styled.div({
  height: '70vh',
  overflowY: 'scroll',
  // 스크롤바 스타일
  '&::-webkit-scrollbar': {
    width: '8px', // 스크롤바 너비
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888', // 스크롤바 색
    borderRadius: '10px', // 둥근 모서리
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#555', // 호버 시 색상 변화
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1', // 스크롤바 트랙 색상
    borderRadius: '10px', // 둥근 모서리
  },
})
