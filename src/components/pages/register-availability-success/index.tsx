import { SizableText, Spinner, Stack, YStack } from 'tamagui'

const RegisterAvailabilitySuccess = () => {
  return (
    <>
      <YStack gap="24px" style={{ fontSize: 20 }} jc="center" ai="center">
        <SizableText size={'$6'} ta={'center'}>
          Super! Jesteśmy w Twojej okolicy!
        </SizableText>
        <SizableText size={'$6'}>Zaczynamy!</SizableText>
        <Stack mt={'80px'}>
          <Spinner size="large" color={'$color1'} />
        </Stack>
      </YStack>
    </>
  )
}
export { RegisterAvailabilitySuccess }
