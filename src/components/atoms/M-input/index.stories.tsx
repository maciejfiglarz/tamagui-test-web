import type { Meta, StoryObj } from '@storybook/react'
import { M_input } from '.'

const meta = {
  title: 'Mooply/Atoms/Input',
  component: M_input,
  tags: ['autodocs'],

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_input>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    w: 200,
    h: 40,
    value: '123',
  },
}
