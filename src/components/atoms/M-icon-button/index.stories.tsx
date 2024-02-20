import type { Meta, StoryObj } from '@storybook/react'

import { M_iconButton } from '.'
import { YStack } from 'tamagui'
import { X } from '@tamagui/lucide-icons'

const meta = {
  title: 'Mooply/Atoms/Buttons/Icon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Ikonkę przekazujemy jako prop "icon". Korzystamy z https://tamagui.dev/docs/components/lucide-icons',
      },
    },
  },
} satisfies Meta<typeof M_iconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Icon: Story = {
  render: () => (
    <YStack gap={20}>
      <M_iconButton size={'$2'} icon={<X size="5" color={'$color1'} />} />
    </YStack>
  ),
}
