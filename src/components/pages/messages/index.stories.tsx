import type { Meta, StoryObj } from '@storybook/react'

import { Messages as MessagesPage } from '.'

const meta = {
  title: 'Mooply/Pages/Messages',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MessagesPage>

export default meta
type Story = StoryObj<typeof meta>

export const Messages: Story = {
  render: () => <MessagesPage />,
}
