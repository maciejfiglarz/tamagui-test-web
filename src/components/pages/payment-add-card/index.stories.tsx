import type { Meta, StoryObj } from '@storybook/react'

import { PaymentAddCard as PaymentAddCardPage } from '.'

const meta = {
  title: 'Mooply/Pages/Payment Add Card',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PaymentAddCardPage>

export default meta
type Story = StoryObj<typeof meta>

export const PaymentAddCard: Story = {
  render: () => <PaymentAddCardPage />,
}
