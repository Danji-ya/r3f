import { useFrame } from '@react-three/fiber';
import { Children, cloneElement, isValidElement, useState } from 'react';
import { Vector3 } from 'three';

const CAMERA = {
  STEP: 0.05,
  POSITION: [0, 5, 10],
  MOVE_WEIGHT: 1.5,
};

function Camera({ children }) {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState(false);
  const vec = new Vector3();

  useFrame((state) => {
    // eslint-disable-next-line no-unused-expressions
    zoom
      ? vec.set(
          focus.x * CAMERA.MOVE_WEIGHT,
          focus.y * CAMERA.MOVE_WEIGHT,
          focus.z * CAMERA.MOVE_WEIGHT,
        )
      : vec.set(CAMERA.POSITION[0], CAMERA.POSITION[1], CAMERA.POSITION[2]);

    state.camera.position.lerp(vec, CAMERA.STEP);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  const zoomToText = (focusRef) => {
    setZoom(!zoom);
    setFocus(focusRef.current.position);
  };

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { zoomToText });
    }
    return child;
  });

  return childrenWithProps;
}

export default Camera;
