import type { Meta, StoryObj } from '@storybook/react'
import { M_calendar_web } from '.'

const meta = {
  title: 'Mooply/Molecules/Calendar web',
  component: M_calendar_web,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_calendar_web>

export default meta
type Story = StoryObj<typeof meta>

//showDaysOutsideCurrentMonth

export const Calendar: Story = {
  args: {
    showDaysOutsideCurrentMonth: false,
  },
}
