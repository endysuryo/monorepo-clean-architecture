import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Forms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Button',
  onClick: (value: any) => {
    console.log(value)
  },
  disabled: false,
  loading: true,
}
