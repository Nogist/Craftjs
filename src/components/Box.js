import React from 'react';
import { useNode } from '@craftjs/core';

const Box = ({ children, width, height, backgroundColor }) => {
  const { connectors: {connect, drag} } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      style={{width, height, backgroundColor, padding: '10px'}}
    >
      {children}
    </div>
  );
}

export default Box;
