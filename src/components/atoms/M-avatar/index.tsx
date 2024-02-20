import { Avatar } from 'tamagui'
import { AvatarImage } from '../../../assets/avatar'

type Size = 'small' | 'medium' | 'big'

const sizeMap = {
  big: '$9',
  medium: '$6',
  small: '$3',
}

const M_avatar = ({ size = 'big' }: { size?: Size }) => {
  return (
    <Avatar circular size={sizeMap[size]} bc="$background3">
      <AvatarImage size={size} />
    </Avatar>
  )
}
export { M_avatar }
