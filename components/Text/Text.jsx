import { useLayoutEffect, useRef, useState } from 'react';
import { Text as RText } from '@react-three/drei';

const TEXT = {
  ARGS: [0.5, 0.5, 0.5],
};

function Text({ data, zoomToText }) {
  const meshRef = useRef();
  const [clicked, setClicked] = useState(false);

  const fontProps = {
    fontSize: 0.5,
    'material-toneMapped': false,
  };

  useLayoutEffect(() => {
    const [x, y, z] = data.position;
    meshRef.current.position.x = x;
    meshRef.current.position.y = y;
    meshRef.current.position.z = z;
  });

  return (
    <RText
      ref={meshRef}
      onClick={() => {
        setClicked(!clicked);
        zoomToText(meshRef);
      }}
      position={data.position}
      color={data.color}
      {...fontProps}
    >
      {data.text}
    </RText>
  );
}

export default Text;
