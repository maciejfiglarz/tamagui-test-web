import type { Meta, StoryObj } from '@storybook/react'

import { M_dateButton } from '.'

const meta = {
  title: 'Mooply/Atoms/Buttons/Date',
  component: M_dateButton,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_dateButton>

export default meta
type Story = StoryObj<typeof meta>

export const Date: Story = {
  args: {
    children: '8:00',
    disabled: false,
    w: 50,
    h: 40,
  },
}
