import React, { ReactNode } from 'react'
import { H1 } from 'tamagui'
import { styled } from 'tamagui'

export const Styled_H1 = styled(H1, {
  fontSize: 20,
  lineHeight: 30,
  textAlign:"left",
  marginTop:20,
  marginBottom:10
})

const M_MainTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Styled_H1>{children}</Styled_H1>
}

export { M_MainTitle }
