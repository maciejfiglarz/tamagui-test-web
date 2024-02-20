import { Input, InputProps, XStack, SizableText } from 'tamagui'
import React from 'react'

type InputMode = 'text' | 'numeric' | 'tel' | 'search' | 'email' | 'url'

interface MInputProps extends InputProps {
  id?: string
  inputMode?: InputMode
  width: number
  value: string
}

const M_inputPostfix: React.FC<MInputProps> = ({ id, inputMode = 'text', width = 300, ...rest }) => {
  return (
    <XStack borderWidth="0px" w={width} style={{ position: 'relative', border: 'none', outline: 'none' }}>
      <Input
        id={id}
        size="$4"
        width="100%"
        borderWidth={2}
        borderColor="$color1"
        py={'$5'}
        br={0}
        fontSize="$7"
        inputMode={inputMode}
        outline="none"
        paddingRight={'70px'}
        focusStyle={{ outlineWidth: '2px', outlineColor: '$color1' }}
        {...rest}
      />
      <SizableText
        style={{ position: 'absolute', lineHeight: 'normal' }}
        right={'8%'}
        top={'50%'}
        transform="translateY(-50%)"
        borderLeftWidth="2px"
        paddingLeft="22px"
        fontStyle="normal"
        fontWeight="500"
        color="$color1"
        borderColor="$color1"
      >
        m2
      </SizableText>
    </XStack>
  )
}
export { M_inputPostfix }
