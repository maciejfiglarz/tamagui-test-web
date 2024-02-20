import React, { ReactNode } from 'react'
import { View } from 'tamagui'
import { styled } from 'tamagui'

export const Styled_View = styled(View, {})

const M_MainTitle: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View style={{ width: '100%', maxWidth:1400,margin:"0 auto",padding:10}}>
      {children}
    </View>
  )
}

export { M_MainTitle }
