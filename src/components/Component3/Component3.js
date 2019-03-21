import React from 'react';

// import './Component2.scss';

import styled from 'styled-components';

const ComponentWrapper = styled.div`
  background: blue;
  color: orange;
  min-height: 18px;
`;

// const Component3 = () => <div className="component3">Component 3</div>;
const Component3 = props => <ComponentWrapper {...props}>{props.children}</ComponentWrapper>;

export default Component3;
