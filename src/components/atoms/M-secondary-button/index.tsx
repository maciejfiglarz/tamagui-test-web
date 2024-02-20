import { Button, ButtonProps } from 'tamagui'
import React, { ReactNode } from 'react'

interface SecondaryButtonProps extends ButtonProps {
  children: ReactNode
  disabled?: boolean
}

const M_secondaryButton: React.FC<SecondaryButtonProps> = ({ children, disabled, ...rest }) => {
  return (
    <>
      <Button
        size="$5"
        br={0}
        fontSize={20}
        disabled={disabled}
        opacity={disabled ? 0.5 : 1}
        backgroundColor="transparent"
        // #todo
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        focusStyle={{ outlineColor: '$borderHover', border: 'none' }}
        borderWidth="2px"
        borderColor="$borderColor"
        color={'$color'}
        {...rest}
      >
        {children}
      </Button>
    </>
  )
}
export { M_secondaryButton }
