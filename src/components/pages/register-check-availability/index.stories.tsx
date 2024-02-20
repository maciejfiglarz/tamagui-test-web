import type { Meta, StoryObj } from '@storybook/react'
import { RegisterCheckAvailability as RegisterCheckAvailabilityPage } from '.'

const meta = {
  title: 'Mooply/Pages/Register Check Availability',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RegisterCheckAvailabilityPage>

export default meta
type Story = StoryObj<typeof meta>

export const RegisterCheckAvailability: Story = {
  render: () => <RegisterCheckAvailabilityPage />,
}
