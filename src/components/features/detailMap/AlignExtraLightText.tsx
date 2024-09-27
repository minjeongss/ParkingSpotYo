import {
  ExtraLightContainer,
  ExtraLightText,
} from '../../../styles/DetailMapStyles'

const AlignExtraLightText = ({
  type,
  data,
}: {
  type: string
  data: string
}) => {
  return (
    <ExtraLightContainer>
      <ExtraLightText>{type}</ExtraLightText>
      <ExtraLightText>{data}</ExtraLightText>
    </ExtraLightContainer>
  )
}

export default AlignExtraLightText
