import React from 'react';
import { useNode } from '@craftjs/core';
import  '../App.scss';

const Components = ({ children, width, height, backgroundColor }) => {
  const { connectors: {connect, drag} } = useNode();

  return (
    <div className='components'
      ref={(ref) => connect(drag(ref))}
    >
      <p>Drag to Add</p>
      {children}
    </div>
  );
}

export default Components;
