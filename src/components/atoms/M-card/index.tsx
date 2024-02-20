import { SizableText, XStack, YStack, useTheme } from 'tamagui'

import { PhotoMock } from '../../../assets/PhotoMock'

const M_card = () => {
  const theme = useTheme()
  const color = theme.color.val

  return (
    <>
      <XStack space>
        <YStack
          w="150px"
          h="200px"
          style={{justifyContent:"start",alignItems:"start"}}
          px="9px"
          py="14px"
          bw={'1px'}
          borderColor="$borderColor"
          gap="$6"
        >
          <YStack gap="4px">
            <SizableText ta="left" size="$2" color="$color">
              Odkurzanie i mycie podłóg
            </SizableText>
            <SizableText ta="left" size="$1" color="$color1">
              od 50 zł/h
            </SizableText>
          </YStack>
          <XStack alignSelf="center">
            <PhotoMock fill={color} />
          </XStack>
        </YStack>
      </XStack>
    </>
  )
}
export { M_card }
