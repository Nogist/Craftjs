import React from 'react';
import { useNode } from '@craftjs/core';

const Container = ({ children }) => {
  const { connectors: {connect, drag} } = useNode();

  return (
    <div className='content'
      ref={(ref) => connect(drag(ref))}
      contentEditable
      suppressContentEditableWarning={true}
    >
      <p>CONTAINER</p>
      {children}
    </div>
  );
}

export default Container;
