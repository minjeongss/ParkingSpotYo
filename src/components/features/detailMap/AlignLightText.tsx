import { LightContainer, LightText } from '../../../styles/DetailMapStyles'

const AlignLightText = ({ type, data }: { type: string; data: string }) => {
  return (
    <LightContainer>
      <LightText>{type}</LightText>
      <LightText>{data}</LightText>
    </LightContainer>
  )
}

export default AlignLightText
