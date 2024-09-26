import styled from '@emotion/styled'

const Table = styled.table({
  width: '100%',
  background: '#F5F5F5',
  borderCollapse: 'collapse',
  color: 'rgba(0, 0, 0 , 0.54)',
})

const Th = styled.th({
  textAlign: 'center',
  padding: '10px',
  border: '1px solid #D9D9D9',
})

const Td = styled.td({
  textAlign: 'center',
  padding: '10px',
  border: '1px solid #D9D9D9',
})

const PriceTable = ({
  basicPrice,
  extraPrice,
  maxPrice,
}: {
  basicPrice: number
  extraPrice: number
  maxPrice: number
}) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>기본 금액</Th>
          <Th>추가 금액</Th>
          <Th>일 최대 금액</Th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td>{basicPrice}원</Td>
          <Td>{extraPrice}원</Td>
          <Td>{maxPrice}원</Td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PriceTable
