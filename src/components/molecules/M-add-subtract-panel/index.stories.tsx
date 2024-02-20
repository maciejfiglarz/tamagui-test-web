import type { Meta, StoryObj } from '@storybook/react'

import { M_AddSubtractPanel } from '.'
import { M_TextBox } from '../../atoms/M-text-box'

const meta = {
  title: 'Mooply/Molecules/Panel',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_TextBox>

export default meta
type Story = StoryObj<typeof meta>

export const AddSubtract: Story = {
  render: () => <M_AddSubtractPanel />,
}
