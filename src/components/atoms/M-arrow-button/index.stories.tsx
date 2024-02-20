import type { Meta, StoryObj } from '@storybook/react'

import { M_arrowButton } from '.'
import { YStack } from 'tamagui'

const meta = {
  title: 'Mooply/Atoms/Buttons/Arrow',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_arrowButton>

export default meta
type Story = StoryObj<typeof meta>

export const Arrow: Story = {
  render: () => (
    <YStack gap={20}>
      <M_arrowButton />
    </YStack>
  ),
}
