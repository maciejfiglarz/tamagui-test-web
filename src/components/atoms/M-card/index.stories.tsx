import type { Meta, StoryObj } from '@storybook/react'
import { M_card } from '.'

const meta = {
  title: 'Mooply/Atoms/Card',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_card>

export default meta
type Story = StoryObj<typeof meta>

export const Card: Story = {
  render: () => <M_card />,
}
