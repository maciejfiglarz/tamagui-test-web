import { Input, InputProps } from 'tamagui'
import React from 'react'

type InputMode = 'text' | 'numeric' | 'tel' | 'search' | 'email' | 'url'

interface MInputProps extends InputProps {
  id?: string
  inputMode?: InputMode
}

const M_input: React.FC<MInputProps> = ({ id, inputMode = 'text', ...rest }) => {
  return (
    <>
      <Input
        {...rest}
        id={id}
        color={'$color1'}
        borderWidth="3px"
        borderColor="$borderColor"
        py={'$5'}
        px={'$3'}
        br={0}
        fontSize="$7"
        inputMode={inputMode}
        focusStyle={{ outlineColor: '$borderHover' }}
        unstyled
      />
    </>
  )
}
export { M_input }
