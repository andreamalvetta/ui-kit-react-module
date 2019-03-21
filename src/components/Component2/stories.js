import React from 'react';
import { storiesOf } from '@storybook/react';
import Component2 from './index';

storiesOf('Component2', module)
  .add('without text', () => <Component2 />)
  .add('with text', () => <Component2>Component 2</Component2>);
