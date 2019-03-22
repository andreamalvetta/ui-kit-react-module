import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './';

storiesOf('Button', module)
  .add('default', () => <Button>Default</Button>)
  .add('primary', () => <Button primary>Primary</Button>)
  .add('danger', () => <Button danger>Danger</Button>)
  .add('small', () => <Button small>Small</Button>)
  .add('large', () => <Button large>Large</Button>)
  .add('inverted', () => <Button inverted>Inverted</Button>)
  .add('link', () => <Button link>Click me</Button>)
  .add('disabled', () => <Button disabled>Click me</Button>);
