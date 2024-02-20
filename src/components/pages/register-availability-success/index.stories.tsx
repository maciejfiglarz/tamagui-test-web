import type { Meta, StoryObj } from '@storybook/react'
import { RegisterAvailabilitySuccess as RegisterAvailabilitySuccessPage } from '.'

const meta = {
  title: 'Mooply/Pages/Register Availability Success',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RegisterAvailabilitySuccessPage>

export default meta
type Story = StoryObj<typeof meta>

export const RegisterAvailabilitySuccess: Story = {
  render: () => <RegisterAvailabilitySuccessPage />,
}
