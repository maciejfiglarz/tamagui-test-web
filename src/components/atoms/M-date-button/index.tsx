import { Button, ButtonProps } from 'tamagui'
import React, { ReactNode } from 'react'

interface DateButtonProps extends ButtonProps {
  children: ReactNode
  disabled?: boolean
}

const M_dateButton: React.FC<DateButtonProps> = ({ children, disabled, ...rest }) => {
  return (
    <>
      <Button
        br={0}
        fontSize={14}
        p={0}
        disabled={disabled}
        opacity={disabled ? 0.5 : 1}
        bc={"trasparent"}
        borderWidth={1}
        borderColor={'$color2'}
        backgroundColor="transparent"
        focusStyle={{ backgroundColor: '$color2', outlineWidth: 0, borderWidth: 0 }}
        {...rest}
      >
        {children}
      </Button>
    </>
  )
}
export { M_dateButton }
