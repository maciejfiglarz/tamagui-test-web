import { FunctionComponent } from 'react'
import { Button, ButtonProps } from 'tamagui'

type ButtonIconProps = { color?: string; size?: number }
type IconProp = JSX.Element | FunctionComponent<ButtonIconProps> | null

interface IconButtonProps extends ButtonProps {
  icon: IconProp
}

const M_iconButton = ({ icon, ...rest }: IconButtonProps) => {
  return <Button p={0} circular={true} backgroundColor={'transparent'} icon={icon} {...rest} />
}
export { M_iconButton }
