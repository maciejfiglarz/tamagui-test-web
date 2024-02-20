import type { Meta, StoryObj } from '@storybook/react'

import { Menu as MenuPage } from '.'

const meta = {
  title: 'Mooply/Pages/Menu',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MenuPage>

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  render: () => <MenuPage />,
}
