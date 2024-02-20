import type { Meta, StoryObj } from '@storybook/react'
import { M_TextBox } from '.'

const meta = {
  title: 'Mooply/Atoms/Text Box',
  component: M_TextBox,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_TextBox>

export default meta
type Story = StoryObj<typeof meta>

export const TextBox: Story = {
  args: {
    children: '1',
  },
}
