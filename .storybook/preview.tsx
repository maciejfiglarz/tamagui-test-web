import React, { useState } from 'react'
import type { Preview } from '@storybook/react'
import config from '../src/tamagui.config'

import { TamaguiProvider } from '@tamagui/web'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'

import { BackgroundTemplate } from '../src/components/templates/background'
import { SelectTheme } from './comboBox'

const preview: Preview = {
  decorators: [
    (Story) => {
      const [theme, setTheme] = useState('light')

      return (
        <TamaguiProvider config={config} defaultTheme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pl">
            <BackgroundTemplate theme={theme}>
              <div style={{ position: 'fixed', left: 30, top: 30 }}>
                <SelectTheme theme={theme} setTheme={setTheme} />
              </div>
              <Story />
            </BackgroundTemplate>
          </LocalizationProvider>
        </TamaguiProvider>
      )
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
