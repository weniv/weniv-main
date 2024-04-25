import React from 'react';

import '@weniv/components-footer/style.css';
import { Footer } from '@weniv/components-footer';

export default {
  title: 'weniv-components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const FooterStory = {
  render: () => <Footer />,
};
