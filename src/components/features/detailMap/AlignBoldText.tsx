import { BoldContainer, BoldText } from '../../../styles/DetailMapStyles'

const AlignBoldText = ({ data }: { data: string }) => {
  return (
    <BoldContainer>
      <BoldText>{data}</BoldText>
    </BoldContainer>
  )
}

export default AlignBoldText
