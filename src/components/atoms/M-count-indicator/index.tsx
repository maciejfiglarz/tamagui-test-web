import { Circle, SizableText } from 'tamagui'

const M_countIndicator = () => {
  return (
    <>
      <Circle backgroundColor="$background4" w={20} h={20} display="flex" jc={'center'} style={{ textAlign: 'center' }}>
        <SizableText fontSize={14} color="#fff" fontWeight="600" lineHeight={20}>
          1
        </SizableText>
      </Circle>
    </>
  )
}
export { M_countIndicator }
