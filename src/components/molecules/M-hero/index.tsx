import React from 'react'
import { View, Image, YStack, XStack } from 'tamagui'
import { PrimaryText, SecondaryText, Container } from './components'

type M_HeroProps = {
  imageUrl: string
  primaryLines?: string[]
  secondaryLines?: string[]
}

const M_Hero: React.FC<M_HeroProps> = ({ imageUrl, primaryLines = [], secondaryLines = [] }) => {
  return (
    <Container>
      <Image
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          zIndex: -1,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        resize
        source={{ uri: imageUrl }}
        width="100%"
        height="100%"
      />
      <YStack alignItems="baseline">
        {primaryLines.map((line) => (
          <View style={{ display: 'inline-block' }}>
            <PrimaryText key={line}>{line}</PrimaryText>
          </View>
        ))}
        {secondaryLines.map((line) => (
          <View style={{ display: 'inline-block' }}>
            <SecondaryText key={line}>{line}</SecondaryText>
          </View>
        ))}
      </YStack>
    </Container>
  )
}
export { M_Hero }
