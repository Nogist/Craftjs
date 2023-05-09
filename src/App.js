import React from 'react';
import { Editor, Frame, Element
 } from '@craftjs/core';
import Box from './components/Box';
import Text from './components/Text';
import Button from './components/Button';
import Component from './components/Component';
import Card from './components/Card';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Editor
        resolver={{
          Text,
          Box,
          Button,
          Component,
          Card,
          Container
        }}
      >
        <Frame>
          <div >
          <Element className='App' is={Box} width='100%' height='100vh' backgroundColor='aqua' canvas>
          <Element is={Box} width={200} height={300} backgroundColor='yellow' canvas />
            <Element is={Component} canvas>
            <Element is={Button}  canvas /> 
              <Element is={Text} canvas /> 
              <Element is={Container} canvas /> 
              <Element is={Card} width={80} height={200} backgroundColor='pink' canvas />
            </Element>
          </Element>
          </div>
        </Frame>
      </Editor>
    </div>
  );
}

export default App;
