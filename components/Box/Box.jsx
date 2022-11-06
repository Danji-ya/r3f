import React from 'react';

function Box() {
  return (
    <mesh>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export default Box;
