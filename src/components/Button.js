import React from 'react';
import { useNode } from '@craftjs/core';

const Button = () => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <button className='content'
      ref={(ref) => connect(drag(ref))}
      contentEditable
      suppressContentEditableWarning={true}
    >
    BUTTON
  </button>
  )
};

export default Button;
