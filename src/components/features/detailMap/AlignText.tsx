import {
  BasicContainer,
  BasicTypeText,
  BasicDataText,
} from '../../../styles/DetailMapStyles'

const AlignText = ({ type, data }: { type: string; data: string }) => {
  return (
    <BasicContainer>
      <BasicTypeText>{type}</BasicTypeText>
      <BasicDataText>{data}</BasicDataText>
    </BasicContainer>
  )
}

export default AlignText
