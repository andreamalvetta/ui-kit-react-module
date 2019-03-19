import React from 'react';

// import './Component1.scss';

import styled from 'styled-components';

const ComponentWrapper = styled.div`
  background: red;
  color: black;
`;

// const Component1 = () => <div className="component1">Component 1</div>;
const Component1 = props => <ComponentWrapper {...props}>{props.children}</ComponentWrapper>;

export default Component1;
