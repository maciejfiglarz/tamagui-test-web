import type { Meta, StoryObj } from '@storybook/react'

import { M_plusMinusButton } from '.'
import { YStack } from 'tamagui'

const meta = {
  title: 'Mooply/Atoms/Buttons/Plus Minus',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_plusMinusButton>

export default meta
type Story = StoryObj<typeof meta>

export const PlusMinus: Story = {
  render: () => (
    <YStack gap={20}>
      <M_plusMinusButton plus />
      <M_plusMinusButton minus />
    </YStack>
  ),
}
