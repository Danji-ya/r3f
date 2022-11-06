import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import Box from '../Box';
import Camera from '../Camera';

function Scene() {
  const [isZoom, setZoom] = useState(false);
  const toggleZoom = () => setZoom((active) => !active);

  return (
    <Canvas>
      <gridHelper args={[10, 10, `red`, `gray`]} />
      <Box onChangeZoom={toggleZoom} />
      <Camera selected={isZoom} />
    </Canvas>
  );
}
export default Scene;
