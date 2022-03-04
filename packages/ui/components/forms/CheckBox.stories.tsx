import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CheckBox } from './CheckBox'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/CheckBox',
  component: CheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof CheckBox>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckBox> = args => <CheckBox {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  placeholder: 'Checkbox',
  label: 'Checkbox',
  onChange: (value: any) => {
    console.log(value)
  },
  readonly: false,
}
