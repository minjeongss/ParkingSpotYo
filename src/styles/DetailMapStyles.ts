import styled from '@emotion/styled'

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '880px',
  margin: 'auto',
  border: '2px solid #D9D9D9',
})

export const MapContainer = styled.div({
  width: '100%',
  height: '20vh',
})

export const InfoContainer = styled.div({
  width: '90%',
})

export const IconContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '1rem 0 1rem 0',
})
export const H1 = styled.h1({
  color: '#0875F5',
  fontWeight: 'bold',
  fontSize: '25px',
})

export const BasicContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 0 1rem 0',
})
export const BasicTypeText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontWeight: 'bold',
  fontSize: '20px',
})
export const BasicDataText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '20px',
})

export const BoldContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 0 1rem 0',
})
export const BoldText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontWeight: 'bold',
  fontSize: '20px',
})

export const LightContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 0 0.5rem 0',
})
export const LightText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '20px',
})

export const ExtraLightContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
export const ExtraLightText = styled.p({
  color: 'rgba(0,0,0,0.54)',
  fontSize: '18px',
})

export const DotLine = styled.hr({
  border: 'none',
  borderTop: '2px dotted #5E5D5D',
  margin: '1rem 0',
})

export const RightContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
})
export const RightText = styled.p({
  color: 'rgba(225, 40, 40, 0.54)',
  fontSize: '20px',
})

export const Table = styled.table({
  width: '100%',
  background: '#F5F5F5',
  borderCollapse: 'collapse',
  color: 'rgba(0, 0, 0 , 0.54)',
  margin: '0 0 1rem 0',
})
export const Th = styled.th({
  textAlign: 'center',
  padding: '10px',
  border: '1px solid #D9D9D9',
})
export const Td = styled.td({
  textAlign: 'center',
  padding: '10px',
  border: '1px solid #D9D9D9',
})
