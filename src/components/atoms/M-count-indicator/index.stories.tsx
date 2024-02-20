import type { Meta, StoryObj } from '@storybook/react'
import { M_countIndicator } from '.'

const meta = {
  title: 'Mooply/Atoms/Count Indicator',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_countIndicator>

export default meta
type Story = StoryObj<typeof meta>

export const CountIndicator: Story = {
  render: () => <M_countIndicator />,
}
