---
to: src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.js
---
import * as React from 'react'

import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>'

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
  parameters: {
    design: [
      {
        type: 'figma',
        name: 'Default',
        url: '',
        allowFullscreen: true,
      },
    ],
  },
}

const Template = (args) => <<%= h.changeCase.pascal(name) %> {...args} />

export const Default = Template.bind({})
Default.args = {}
