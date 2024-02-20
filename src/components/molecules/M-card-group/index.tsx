import { XStack } from 'tamagui'
import { M_card } from '../../atoms/M-card'

const M_cardGroup = () => {
  return (
    <>
      <XStack gap="$5" flexWrap="wrap" style={{ width: '400px' }}>
        <M_card />
        <M_card />
        <M_card />
        <M_card />
        <M_card />
        <M_card />
      </XStack>
    </>
  )
}
export { M_cardGroup }
