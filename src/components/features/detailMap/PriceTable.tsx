import { Table, Th, Td } from '../../../styles/DetailMapStyles'

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
