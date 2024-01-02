import type { Meta, StoryObj } from '@storybook/react'

import NavbarComponent from './index'

const meta: Meta<typeof NavbarComponent> = {
  title: 'Components',
  component: NavbarComponent,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Desktop',
        url: '',
        allowFullscreen: true,
      },
      {
        type: 'figma',
        name: 'Mobile',
        url: '',
        allowFullscreen: true,
      },
    ],
  },
}

export default meta
type Story = StoryObj<typeof NavbarComponent>

export const Navigation: Story = {
  args: {},
}
