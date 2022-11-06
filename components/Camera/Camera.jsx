import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const CAMERA = {
  STEP: 0.09,
  POSITION: [0, 5, 5],
};

function Camera({ selected }) {
  const vec = new Vector3();

  useFrame((state) => {
    const x = selected ? 5 : CAMERA.POSITION[0];
    const y = selected ? 5 : CAMERA.POSITION[1];
    const z = selected ? 5 : CAMERA.POSITION[2];

    state.camera.position.lerp(vec.set(x, y, z), CAMERA.STEP);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return null;
}

export default Camera;
