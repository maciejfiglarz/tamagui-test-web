import { ReactNode } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/pl'

type MUI_localicationProviderProps = {
  children: ReactNode
}

const MUI_localicationProvider = ({ children }: MUI_localicationProviderProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
      {children}
    </LocalizationProvider>
  )
}
export { MUI_localicationProvider }
