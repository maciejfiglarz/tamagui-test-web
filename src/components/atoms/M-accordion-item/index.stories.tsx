import type { Meta, StoryObj } from '@storybook/react'
import { M_accordionItem } from '.'

const meta = {
  title: 'Mooply/Atoms/Accordion Item',

  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof M_accordionItem>

export default meta
type Story = StoryObj<typeof meta>

export const AccordionItem: Story = {
  render: () => <M_accordionItem />,
}
