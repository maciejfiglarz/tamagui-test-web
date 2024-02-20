import type { Meta, StoryObj } from '@storybook/react'
import { PaymentSuccess as PaymentSuccessPage } from '.'

const meta = {
  title: 'Mooply/Pages/Payment Success',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PaymentSuccessPage>

export default meta
type Story = StoryObj<typeof meta>

export const PaymentSuccess: Story = {
  render: () => <PaymentSuccessPage />,
}
