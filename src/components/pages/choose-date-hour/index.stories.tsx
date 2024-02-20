import type { Meta, StoryObj } from '@storybook/react'

import { ChooseDateAndHour as ChooseDateAndHourPage } from '.'

const meta = {
  title: 'Mooply/Pages/Choose Date And Hour',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Zawiera implementację zablokowania możliwości wyboru danego dnia (tutaj przykładowo 11 października).',
      },
    },
  },
} satisfies Meta<typeof ChooseDateAndHourPage>

export default meta
type Story = StoryObj<typeof meta>

export const ChooseDateAndHour: Story = {
  render: () => <ChooseDateAndHourPage />,
}
