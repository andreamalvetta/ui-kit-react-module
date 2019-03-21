import React from 'react';
import { storiesOf } from '@storybook/react';
import Component3 from './index';

storiesOf('Component3', module)
  .add('without text', () => <Component3 />)
  .add('with text', () => <Component3>Component 3</Component3>);
