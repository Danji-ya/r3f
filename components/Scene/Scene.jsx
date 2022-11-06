import { Canvas } from '@react-three/fiber';
import Box from '../Box';
import Camera from '../Camera';
import Text from '../Text';

function Scene({ words }) {
  return (
    <Canvas>
      <gridHelper args={[10, 10, `red`, `gray`]} />
      <ambientLight />
      <Box />
      <Camera>
        {words.map((word, idx) => (
          <Text key={`${word.color + idx}`} data={word} />
        ))}
      </Camera>
    </Canvas>
  );
}
export default Scene;
