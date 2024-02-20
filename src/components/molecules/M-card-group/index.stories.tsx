import type { Meta, StoryObj } from '@storybook/react'
import { M_cardGroup } from '.'

const meta = {
  title: 'Mooply/Molecules/Card group',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_cardGroup>

export default meta
type Story = StoryObj<typeof meta>

export const CardGroup: Story = {
  render: () => <M_cardGroup />,
}
