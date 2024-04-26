import type { Meta, StoryObj } from '@storybook/vue3'
import IconInput from '../components/IconInput.vue'
import Search from '../components/icons/Search.vue'

const meta: Meta<typeof IconInput> = {
  title: 'IconInput',
  component: IconInput,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
  },
  args: {
    variant: 'small',
  },
  render: (args) => ({
    components: { IconInput, Search },
    setup() {
      return { args }
    },
    template: `
      <IconInput :variant="args.variant" v-slot="slotProps" placeholder="Search">
        <Search :size="slotProps.size" />
      </IconInput>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    variant: 'small',
  },
}

export const Large: Story = {
  args: {
    variant: 'large',
  },
}
