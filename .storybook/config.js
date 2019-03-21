import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Component1/stories.js');
  require('../src/components/Component2/stories.js');
  require('../src/components/Component3/stories.js');
}

configure(loadStories, module);
