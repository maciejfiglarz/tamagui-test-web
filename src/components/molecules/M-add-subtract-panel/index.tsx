import { XStack, YStack } from 'tamagui'

import { M_plusMinusButton } from '../../atoms/M-plus-minus-button'
import { M_TextBox } from '../../atoms/M-text-box'

const M_AddSubtractPanel = () => {
  return (
    <>
      <YStack gap={2}>
        <XStack f={1} ai="center" jc="center" gap={25}>
          <M_plusMinusButton minus />
          <M_TextBox>2</M_TextBox>
          <M_plusMinusButton plus />
        </XStack>
      </YStack>
    </>
  )
}
export { M_AddSubtractPanel }
