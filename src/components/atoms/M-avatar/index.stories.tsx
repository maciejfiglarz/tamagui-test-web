import type { Meta, StoryObj } from '@storybook/react'
import { M_avatar } from '.'

const meta = {
  title: 'Mooply/Atoms/Avatar',
  component: M_avatar,
  argTypes: {
    size: {
      description: 'This is a description for the size prop.',
      options: ['big', 'medium', 'small'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Avatar: Story = {
  args: {
    size: 'big',
  },
}
