import type { Meta, StoryObj } from '@storybook/react'

import { M_secondaryButton } from '.'

const meta = {
  title: 'Mooply/Atoms/Buttons/Secondary',
  component: M_secondaryButton,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_secondaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Secondary: Story = {
  args: {
    children: 'Karta płatnicza',
    disabled: false,
    w: 330,
    h: 40,
  },
}
