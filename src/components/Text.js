import React from 'react';
import { useNode } from '@craftjs/core';

const Text = () => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div className='content'
      ref={(ref) => connect(drag(ref))}
      contentEditable
      suppressContentEditableWarning={true}
    >
    <p>TEXT</p>
  </div>
  )
};

export default Text;
