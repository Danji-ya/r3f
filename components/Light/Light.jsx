import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const LIGHT = {
  POSITION: [0, 0, 0],
  COLOR: '#ffffff',
};

function Light() {
  const lightRef = useRef();

  useFrame(() => {
    lightRef.current.position.x = Math.sin(Date.now() / 3600);
    lightRef.current.position.z = Math.cos(Date.now() / 3600);
  });

  return (
    <directionalLight
      ref={lightRef}
      color={LIGHT.COLOR}
      position={LIGHT.POSITION}
    />
  );
}

export default Light;
