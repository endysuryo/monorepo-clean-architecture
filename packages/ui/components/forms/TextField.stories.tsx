import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextField } from './TextField'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof TextField>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  placeholder: 'Hello',
  onChange: (value: any) => {
    console.log(value)
  },
  readonly: false,
}
