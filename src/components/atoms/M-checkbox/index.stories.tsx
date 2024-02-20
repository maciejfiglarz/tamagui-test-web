import type { Meta, StoryObj } from '@storybook/react'
import { M_checkbox } from '.'

const meta = {
  title: 'Mooply/Atoms/Checkbox',
  component: M_checkbox,

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Checkbox: Story = {
  args: {
    size: 20,
    label: 'Dobierz dodatkowe usługi',
  },
}
