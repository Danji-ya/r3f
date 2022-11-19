import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { Quaternion, Vector3 } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { degToRad } from 'three/src/math/MathUtils';

function Plane() {
  const loader = useLoader(GLTFLoader, './plane/scene.glb');
  const boxRef = useRef();
  const meshRef = useRef();
  const groupRef = useRef();
  const LEFT = new Vector3(-1, 0, 0);
  const UP = new Vector3(0, 1, 0);

  const rotationQuaternionForCoordinates = (lat2, long2) => {
    const q1 = new Quaternion().setFromAxisAngle(LEFT, degToRad(lat2 - 90));
    const q2 = new Quaternion().setFromAxisAngle(UP, degToRad(long2));
    return q2.multiply(q1);
  };

  const rotationQuaternion = new Quaternion();

  useFrame((state) => {
    const startQuaternion = rotationQuaternionForCoordinates(0, 0);
    const endQuaternion = rotationQuaternionForCoordinates(100, 100);

    const flightTime = 5;

    const phase = (state.clock.elapsedTime % flightTime) / flightTime;

    rotationQuaternion.slerpQuaternions(startQuaternion, endQuaternion, phase);

    boxRef.current.setRotationFromQuaternion(rotationQuaternion);
  });

  return (
    <group ref={groupRef}>
      <object3D ref={boxRef}>
        <mesh ref={meshRef} position={[0, 2.1, 0]}>
          <primitive object={loader.scene} scale={0.0005} />
        </mesh>
      </object3D>
    </group>
  );
}

export default Plane;
