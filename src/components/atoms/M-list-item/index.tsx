import { ListItem, Separator, SizableText, XStack, YGroup, YStack } from 'tamagui'

const M_ListItem = () => {
  return (
    <YGroup alignSelf="center" bordered width={320} separator={<Separator />}>
      <ListItem hoverTheme textAlign="left">
        <YStack flex={1}>
          <XStack flex={1} jc="space-between">
            <SizableText size="$4">Mycie balkonu</SizableText>
            <SizableText size="$4">80 zł</SizableText>
          </XStack>
          <SizableText size="$2" color="$color1" style={{ alignSelf: 'start' }} ml="$4">
            Ilość dywanów: 1
          </SizableText>
        </YStack>
      </ListItem>
    </YGroup>
  )
}
export { M_ListItem }
