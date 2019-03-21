import React from 'react';
import { storiesOf } from '@storybook/react';
import Component1 from './index';

storiesOf('Component1', module)
  .add('without text', () => <Component1 />)
  .add('with text', () => <Component1>Component 1</Component1>);
