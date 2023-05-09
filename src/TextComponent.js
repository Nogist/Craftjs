import React from 'react';
import { useNode } from '@craftjs/core';

const TextComponent = ({ text }) => {
  const { connectors: { connect, drag }, isClicked, actions: { setProp } } = useNode(
    (state) => ({
      isClicked: state.events.selected,
    })
  );

  return (
    <div ref={dom => connect(drag(dom))}>
      <h2>{text}</h2>
      {
        isClicked ? (
          <div>
            <input
              type="text"
              value={text}
              onChange={e => setProp(props => props.text = e.target.value)}
            />
          </div>
        ) : null
      }
    </div>
  );
};

export default TextComponent;
