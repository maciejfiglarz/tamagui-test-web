import type { Meta, StoryObj } from '@storybook/react'
import { M_accordion } from '.'

const meta = {
  title: 'Mooply/Molecules/Accordion',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_accordion>

export default meta
type Story = StoryObj<typeof meta>

export const ListItem: Story = {
  render: () => <M_accordion />,
}
