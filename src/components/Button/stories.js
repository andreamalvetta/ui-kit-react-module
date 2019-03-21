import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './';

storiesOf('Button', module)
  .add('default', () => <Button>Click me</Button>)
  .add('hover', () => <Button onMouseOver={action('hovered')}>Click me</Button>)
  .add('click', () => <Button onClick={action('clicked')}>Click me</Button>);
