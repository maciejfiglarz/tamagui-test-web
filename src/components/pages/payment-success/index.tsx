import { SizableText, YStack } from 'tamagui'

const PaymentSuccess = () => {
  return (
    <>
      <YStack gap={22}>
        <SizableText fontSize={24} ta={'center'}>
          Płatność powiodła się!
        </SizableText>
        <SizableText fontSize={16} ta={'center'}>
          Zlecenie zostało przyjete do realizacji!
        </SizableText>
      </YStack>
    </>
  )
}
export { PaymentSuccess }
