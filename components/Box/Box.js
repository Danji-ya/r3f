import React from 'react';

function Box({ onChangeZoom }) {
  return (
    <mesh onClick={onChangeZoom}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default Box;
