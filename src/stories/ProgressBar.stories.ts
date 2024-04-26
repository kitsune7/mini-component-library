import type { Meta, StoryObj } from '@storybook/vue3'
import ProgressBar from '../components/ProgressBar.vue'

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: {
    value: 50,
    variant: 'medium',
  },
  render: (args) => ({
    components: { ProgressBar },
    setup() {
      return { args }
    },
    template: `
      <ProgressBar :value="args.value" :variant="args.variant"></ProgressBar>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Medium: Story = {}

export const Large: Story = {
  args: {
    variant: 'large',
  },
}

export const Small: Story = {
  args: {
    variant: 'small',
  },
}
