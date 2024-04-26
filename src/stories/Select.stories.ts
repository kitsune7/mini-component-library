import type { Meta, StoryObj } from '@storybook/vue3'
import Select from '../components/Select.vue'

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  tags: ['autodocs'],
  render: () => ({
    components: { Select },
    template: `
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Select>
    `,
  }),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
