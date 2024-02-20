import { Button, ButtonProps } from 'tamagui'
import React, { ReactNode } from 'react'

interface PrimaryButtonProps extends ButtonProps {
  children: ReactNode
  disabled?: boolean
  width?: string
}

const M_primaryButton: React.FC<PrimaryButtonProps> = ({ children, disabled, width, ...rest }) => {
  return (
    <>
      <Button
        size="$5"
        br={0}
        focusStyle={{ outlineColor: '$borderHover' }}
        backgroundColor="$background2"
        w={width}
        fontSize={20}
        disabled={disabled}
        opacity={disabled ? 0.5 : 1}
        {...rest}
      >
        {children}
      </Button>
    </>
  )
}
export { M_primaryButton }
