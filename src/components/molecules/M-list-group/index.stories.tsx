import type { Meta, StoryObj } from '@storybook/react'
import { M_ListGroup } from '.'

const meta = {
  title: 'Mooply/Molecules/ListGroup',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_ListGroup>

export default meta
type Story = StoryObj<typeof meta>

export const ListGroup: Story = {
  render: () => <M_ListGroup />,
}
