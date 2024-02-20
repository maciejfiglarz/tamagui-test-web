import type { Meta, StoryObj } from '@storybook/react'
import { M_inputPostfix } from '.'

const meta = {
  title: 'Mooply/Atoms/Input Postfix',
  tags: ['autodocs'],
  component: M_inputPostfix,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_inputPostfix>

export default meta
type Story = StoryObj<typeof meta>

export const InputPostfix: Story = {
  args: {
    value: '123',
    width: 300,
  },
}
