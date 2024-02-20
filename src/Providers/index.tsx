import  { ReactNode } from 'react'
import { TamaguiProvider } from './Tamagui'
import { MUI_localicationProvider } from './MUI-localization'

type ProviderProps = {
  children: ReactNode
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <TamaguiProvider>
      <MUI_localicationProvider>{children}</MUI_localicationProvider>
    </TamaguiProvider>
  )
}
export { Providers }
