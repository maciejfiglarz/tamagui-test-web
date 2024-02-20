import type { Meta, StoryObj } from '@storybook/react'

import { MessagesReply as MessagesReplyPage } from '.'

const meta = {
  title: 'Mooply/Pages/Messages Reply',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof MessagesReplyPage>

export default meta
type Story = StoryObj<typeof meta>

export const MessagesReply: Story = {
  render: () => <MessagesReplyPage />,
}
