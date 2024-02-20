import { Plus, Minus } from '@tamagui/lucide-icons'
import { Button, styled } from 'tamagui'

export const M_plusMinusButton = styled(Button, {
  padding: 0,
  color: '$color',
  backgroundColor: '$color2',
  borderRadius: 0,
  width: 58,
  height: 40,
  hoverStyle: { backgroundColor: '$color1' },
  // #todo
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  focusStyle: { outline: 'none' },

  variants: {
    plus: {
      true: {
        icon: <Plus size="4" color="$color3" />,
      },
    },
    minus: {
      true: {
        icon: <Minus size="4" color="$color3" />,
      },
    },
  },

  defaultVariants: {
    plus: true,
  },
})
