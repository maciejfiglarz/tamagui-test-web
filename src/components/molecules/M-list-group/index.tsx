import { ListItem, Separator, SizableText, XStack, YGroup, YStack } from 'tamagui'

const M_ListGroup = () => {
  return (
    <>
      <YGroup alignSelf="center" bordered width={320} separator={<Separator />}>
        <YGroup.Item>
          <ListItem hoverTheme textAlign="left">
            <YStack flex={1}>
              <XStack flex={1} jc="space-between">
                <SizableText size="$4">Mycie balkonu</SizableText>
                <SizableText size="$4">80 zł</SizableText>
              </XStack>
              <SizableText size="$2" color="$color1" style={{alignSelf:"start"}}  ml="$4">
                Ilość dywanów: 1
              </SizableText>
            </YStack>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem hoverTheme textAlign="left">
            <YStack flex={1}>
              <XStack flex={1} jc="space-between">
                <SizableText size="$4">Pranie</SizableText>
                <SizableText size="$4">60 zł</SizableText>
              </XStack>
              <SizableText size="$2" color="$color1" style={{alignSelf:"start"}}  ml="$4">
                Powierzchnia: 15 m²
              </SizableText>
            </YStack>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem hoverTheme textAlign="left">
            <YStack flex={1}>
              <XStack flex={1} jc="space-between">
                <SizableText size="$4">Pranie dywanów</SizableText>
                <SizableText size="$4">80 zł</SizableText>
              </XStack>
              <SizableText size="$2" color="$color1" style={{alignSelf:"start"}}  ml="$4">
                Powierzchnia: 15 m²
              </SizableText>
            </YStack>
          </ListItem>
        </YGroup.Item>
        <YGroup.Item>
          <ListItem hoverTheme textAlign="left">
            <YStack flex={1}>
              <XStack flex={1} jc="space-between">
                <SizableText size="$4">Mycie okien</SizableText>
                <SizableText size="$4">80 zł</SizableText>
              </XStack>
              <SizableText size="$2" color="$color1" style={{alignSelf:"start"}}  ml="$4">
                Ilość okien 4
              </SizableText>
            </YStack>
          </ListItem>
        </YGroup.Item>
      </YGroup>
    </>
  )
}
export { M_ListGroup }
