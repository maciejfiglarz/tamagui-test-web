import { Button, SizableText, XStack, YStack } from 'tamagui'
import { M_arrowButton } from '../../atoms/M-arrow-button'
import { M_avatar } from '../../atoms/M-avatar'
import { M_countIndicator } from '../../atoms/M-count-indicator'

const Messages = () => {
  const mockText = 'Cześć! Dziękuję za zamówienie'
  const truncatedText = mockText.length > 22 ? `${mockText.slice(0, 22)}...` : mockText

  return (
    <YStack ai="center">
      <XStack style={{alignSelf:"start"}} >
        <M_arrowButton />
      </XStack>
      <SizableText fontSize={20} textAlign="center" mt={10}>
        Wiadomości
      </SizableText>
      <Button gap={10} mt={45} w={300} h={100} br={0}>
        <XStack>
          <M_avatar size="medium" />
          <XStack style={{ position: 'absolute', right: -6, top: 0 }}>
            <M_countIndicator />
          </XStack>
        </XStack>
        <YStack style={{alignItems:"start"}}  gap={6}>
          <SizableText fontWeight="bold" fontSize={16}>
            Natalia z Mooply
          </SizableText>
          <SizableText fontSize={16}>{truncatedText}</SizableText>
        </YStack>
      </Button>
    </YStack>
  )
}
export { Messages }
