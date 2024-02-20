import type { Meta, StoryObj } from '@storybook/react'
import { M_ListItem } from '.'

const meta = {
  title: 'Mooply/Atoms/ListItem',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_ListItem>

export default meta
type Story = StoryObj<typeof meta>

export const ListItem: Story = {
  render: () => <M_ListItem />,
}
