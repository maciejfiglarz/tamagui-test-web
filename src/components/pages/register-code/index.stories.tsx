import type { Meta, StoryObj } from '@storybook/react'

import { RegisterCode as RegisterCodePage } from '.'

const meta = {
  title: 'Mooply/Pages/Register Code',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RegisterCodePage>

export default meta
type Story = StoryObj<typeof meta>

export const RegisterCode: Story = {
  render: () => <RegisterCodePage />,
}
