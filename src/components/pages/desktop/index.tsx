import { Button, Text, XStack, YStack, View, ScrollView, useMedia } from 'tamagui'

import { M_MainTitle } from '../../atoms/M-main-title'
import { M_SliderCard } from '../../atoms/M-slider-card'
// import { M_Slider } from '../../molecules/M-slider'

const Desktop = () => {
  const media = useMedia()
  return (
    <>
      <View margin={10}>
      <XStack
        // can be used as a ternary
        backgroundColor={media.sm ? 'red' : 'blue'}
        // can be used as a spread
        {...(media.lg && {
          x: 10,
          y: 10,
        })}
      >
        <Button>Hello</Button>
      </XStack>

      <YStack style={{ outline: '1px solid blue' }}>
        <YStack>
          <M_MainTitle>Zużycie prądu</M_MainTitle>
        </YStack>
        <YStack>
          <M_MainTitle>Wzywania</M_MainTitle>
          {/* <M_Slider /> */}
          <ScrollView horizontal p={10}>
            <M_SliderCard />
            <M_SliderCard />
            <M_SliderCard />
            <M_SliderCard />
            <M_SliderCard />
            <M_SliderCard />
            <M_SliderCard />
            <M_SliderCard />
            <M_SliderCard />
          </ScrollView>
        </YStack>
      </YStack>
      </View>
    </>
  )
}

export { Desktop }
