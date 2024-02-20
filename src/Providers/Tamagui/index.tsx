import { TamaguiProvider as TamaguiProvider_ } from '@tamagui/web'
import { ReactNode } from 'react'
import config from '../../tamagui.config'

//Należy usunąć dla wersji mobilnej
import '@tamagui/core/reset.css'

type TamaguiProviderProps = {
  children: ReactNode
}

const TamaguiProvider = ({ children }: TamaguiProviderProps) => {
  return (
    <TamaguiProvider_ config={config} defaultTheme="light">
      {children}
    </TamaguiProvider_>
  )
}
export { TamaguiProvider }
