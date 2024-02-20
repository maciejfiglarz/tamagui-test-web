import type { Meta, StoryObj } from '@storybook/react'

import { PaymentChooseMethod as PaymentChooseMethodPage } from '.'

const meta = {
  title: 'Mooply/Pages/Payment Choose Method',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PaymentChooseMethodPage>

export default meta
type Story = StoryObj<typeof meta>

export const PaymentChooseMethod: Story = {
  render: () => <PaymentChooseMethodPage />,
}
