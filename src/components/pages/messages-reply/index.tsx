import { SizableText, XStack, YStack } from 'tamagui'
import { M_arrowButton } from '../../atoms/M-arrow-button'
import { M_avatar } from '../../atoms/M-avatar'
import { M_input } from '../../atoms/M-input'

const MessagesReply = () => {
  return (
    <YStack ai="center" minWidth={400}>
      <XStack style={{ position: 'absolute', left: 0 }}>
        <M_arrowButton />
      </XStack>
      <XStack alignSelf="center" ai="center" mt={21} flex={1}>
        <XStack ai="center" gap={12} flex={1}>
          <M_avatar size="small" />
          <SizableText fontWeight="bold" fontSize={16}>
            Natalia z Mooply
          </SizableText>
        </XStack>
      </XStack>

      <YStack w="100%" gap={30}>
        <XStack bc={'$background2'} padding={8} paddingBottom={15} mt={40} w={240} style={{alignSelf:"start"}}>
          <SizableText fontSize={14} ta="left">
            {'Cześć! :) Dziękuję za zamówienie. Jeśli będziesz mieć pytania, lub informacje dla mnie, pisz śmiało! :)'}
          </SizableText>
        </XStack>
        <XStack bc={'$background2'} padding={8} paddingBottom={15} w={240} style={{alignSelf:"end"}}>
          <SizableText fontSize={14} style={{alignSelf:"end"}}>
            {'OK.'}
          </SizableText>
        </XStack>
      </YStack>
      <M_input w={240} h={30} mt={50} />
    </YStack>
  )
}
export { MessagesReply }
