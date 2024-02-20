import { config } from '@tamagui/config'
import { createTamagui } from 'tamagui'
import { tokens } from '@tamagui/themes'

const tamaguiConfig = createTamagui({
  ...config,

  themes: {
    dark: {
      //tła
      background: '#000',
      background2: tokens.color.gray5Dark,
      background3: tokens.color.gray8Dark,
      background4: tokens.color.gray11Dark,
      buttonBackground: '#262626',
      buttonBackgroundHover: '#333333',

      //bordery
      borderColor: tokens.color.gray8Dark,
      borderHover: tokens.color.gray10Dark,
      borderPress: tokens.color.gray10Dark,
      borderFocus: '#fff',

      //teksty
      color: tokens.color.gray12Dark,
      color1: tokens.color.gray10Dark,
      color2: tokens.color.gray5Dark,
      color3: 'black',

      //cienie
      shadowColor: tokens.color.gray8Dark,
    },
    light: {
      //tła
      background: '#fff',
      background2: tokens.color.gray5Light,
      background3: tokens.color.gray8Light,
      background4: tokens.color.gray11Light,
      buttonBackground: '#262626',
      buttonBackgroundHover: '#333333',

      //bordery
      borderColor: tokens.color.gray8Light,
      borderHover: tokens.color.gray10Light,
      borderPress: tokens.color.gray10Light,
      borderFocus: tokens.color.gray10Light,

      //teksty
      color: '#000',
      color1: tokens.color.gray10Light,
      color2: tokens.color.gray5Light,
      color3: 'white',

      //cienie
      shadowColor: tokens.color.gray8Light,
    },
  },
  media: {
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    md: { maxWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    lg: { maxWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
})

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig
