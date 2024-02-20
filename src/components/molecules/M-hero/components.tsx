import { styled, Text, View } from 'tamagui'

export const TitleFrame = styled(Text, {
  borderTopRightRadius: 10,
  borderBottomRightRadius: 10,
  backgroundColor: '#222',
  color: 'white',
  textAlign: 'left',
  padding: 7,
  // #todo
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  display: 'inline-block !important',
  marginBottom: 15,
})

export const PrimaryText = styled(TitleFrame, {
  fontSize: 14,
})

export const SecondaryText = styled(TitleFrame, {
  fontSize: 12,
})

export const Container = styled(View, {
  height: 250,
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding:"0 20px"
})
