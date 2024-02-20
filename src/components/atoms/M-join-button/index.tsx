import React from 'react'
import { Button, styled } from 'tamagui'
import { ArrowRight } from '@tamagui/lucide-icons'

 const StyledButton = styled(Button, {
  width:"100%",
  backgroundColor: '$buttonBackground',
  color: '$color3',
  hoverStyle: { backgroundColor: '$buttonBackgroundHover',},
  focusStyle: { backgroundColor: 'transparent' },
  marginTop:15,
  fontSize: 14,
  display:"flex",
  justifyContent:"space-between"
})

const M_JoinButton = () => {
  return (
    <div>
      <StyledButton>
        Dołącz do wyzwania <ArrowRight size="$1" color={'$color3'} />
      </StyledButton>
    </div>
  )
}

export { M_JoinButton }
