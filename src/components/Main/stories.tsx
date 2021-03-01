import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

// Use default values
export const Basic: Story = (args) => <Main {...args} />

// Use other values
export const Hard: Story = (args) => <Main {...args} />
Hard.args = {
  title: 'React mode hard',
  description: 'Use react in a hard mode'
}
