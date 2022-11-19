import { useGLTF } from '@react-three/drei';
import { degToRad } from '../../utils/common';

const EARTH = {
  POSITION: [0, 0, 0],
  COLOR: '#ffffff',
  ROTATION: [-degToRad(90), 0, 0],
  SCALE: 2,
};

function Earth() {
  const { nodes, materials } = useGLTF('./model/scene.gltf');

  return (
    <group scale={EARTH.SCALE} rotation={EARTH.ROTATION}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EARTH_0.geometry}
        material={materials['Material.001']}
      />
      <mesh castShadow receiveShadow material={materials['Material.002']} />
    </group>
  );
}

export default Earth;
