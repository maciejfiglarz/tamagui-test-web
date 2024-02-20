import { ArrowLeft } from '@tamagui/lucide-icons'
import { Button, styled } from 'tamagui'

export const M_arrowButton = styled(Button, {
  padding: 0,
  color: '$color',
  backgroundColor: 'transparent',
  borderRadius: 0,
  margin: 0,
  outlineOffset: 0,
  circular: true,
  // #todo
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  outline: 'none',
  hoverStyle: { backgroundColor: 'transparent' },
  focusStyle: { backgroundColor: 'transparent' },
  scaleIcon: 0.5,
  icon: <ArrowLeft size="5" color={'$color1'} />,
})
