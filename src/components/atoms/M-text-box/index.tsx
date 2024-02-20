import { SizableText, Stack, styled } from 'tamagui'
import React, { ReactNode } from 'react'

const StyledM_TextBox = styled(Stack, {
  // #todo
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  color: '$color',
  borderWidth: '2px',
  borderColor: '$color2',
  width: 100,
  height: 40,
  jc: 'center',
  ai: 'center',
})

const M_TextBox: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StyledM_TextBox>
      <SizableText size={'$7'}>{children}</SizableText>
    </StyledM_TextBox>
  )
}

export { M_TextBox }
