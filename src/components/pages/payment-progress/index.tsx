import { SizableText, Spinner, Stack, YStack } from 'tamagui'

const PaymentProgress = () => {
  return (
    <>
      <YStack jc="center" ai="center">
        <SizableText fontSize={24} ta={'center'}>
          Płatność jest właśnie przetwarzana
        </SizableText>
        <Stack mt={'135px'}>
          <Spinner size="large" color={'$color1'} />
        </Stack>
      </YStack>
    </>
  )
}
export { PaymentProgress }
