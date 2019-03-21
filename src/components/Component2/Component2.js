import React from 'react';

// import './Component2.scss';

import styled from 'styled-components';

const ComponentWrapper = styled.div`
  background: green;
  color: yellow;
  min-height: 18px;
`;

// const Component2 = () => <div className="component2">Component 2</div>;
const Component2 = props => <ComponentWrapper {...props}>{props.children}</ComponentWrapper>;

export default Component2;
