import type { Meta, StoryObj } from '@storybook/react'

import { M_primaryButton } from '.'

const meta = {
  title: 'Mooply/Atoms/Buttons/Primary',
  component: M_primaryButton,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_primaryButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Kontynuuj',
    disabled: false,
    width: '200px',
  },
}
