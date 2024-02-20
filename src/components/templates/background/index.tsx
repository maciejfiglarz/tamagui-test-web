import { ReactNode } from 'react'
import { Stack } from 'tamagui'

const BackgroundTemplate = ({ children, theme }: { children: ReactNode; theme: string }) => {
  return (
    <Stack
      backgroundColor={theme === 'light' ? 'white' : 'black'}
      width={'100vw'}
      padding="200px"
      minHeight="300px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Stack>
  )
}
export { BackgroundTemplate }
