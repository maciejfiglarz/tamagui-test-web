import type { Meta, StoryObj } from '@storybook/react'

import { ChooseDate as ChooseDatePage } from '.'

const meta = {
  title: 'Mooply/Pages/Choose Date',
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
} satisfies Meta<typeof ChooseDatePage>

export default meta
type Story = StoryObj<typeof meta>

export const ChooseDate: Story = {
  render: () => <ChooseDatePage />,
}
