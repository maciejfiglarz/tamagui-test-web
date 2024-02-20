import type { Meta, StoryObj } from '@storybook/react'

import { Register as RegisterPage } from '.'

const meta = {
  title: 'Mooply/Pages/Register',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RegisterPage>

export default meta
type Story = StoryObj<typeof meta>

export const Register: Story = {
  render: () => <RegisterPage />,
}
