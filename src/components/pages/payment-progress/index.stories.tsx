import type { Meta, StoryObj } from '@storybook/react'
import { PaymentProgress as PaymentProgressPage } from '.'

const meta = {
  title: 'Mooply/Pages/Payment Progress',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PaymentProgressPage>

export default meta
type Story = StoryObj<typeof meta>

export const PaymentProgress: Story = {
  render: () => <PaymentProgressPage />,
}
