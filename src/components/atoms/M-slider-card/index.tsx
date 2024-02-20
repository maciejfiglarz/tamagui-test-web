import { Card, CardBackground } from 'tamagui'
import { Image } from 'tamagui'
import image from '../../../assets/3.png'

const M_SliderCard = () => {
  return (
    <Card
      //   scale={0.98}
      //   hoverStyle={{ scale: 0.97 }}
      //   pressStyle={{ scale: 0.97 }}
      // elevate
      width={400}
      height={200}
      position="relative"
      //   animation={'bouncy'}
      //   animateOnly={['transform']}
      mr={20}
    >
      <CardBackground>
        <Image
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            objectFit:"cover",
            zIndex: 11,
            borderRadius: 10,
          }}
          resize
          source={{ uri: image }}
          width="100%"
          height="100%"
        />
      </CardBackground>
    </Card>
  )
}

export { M_SliderCard }
