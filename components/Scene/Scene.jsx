import { Canvas } from '@react-three/fiber';
import Camera from '../Camera';
import Earth from '../Earth';
import Light from '../Light';
import Plane from '../Plane';
import Text from '../Text';

function Scene({ words }) {
  return (
    <Canvas>
      <gridHelper args={[10, 10, `red`, `gray`]} />
      <Camera>
        {words.map((word, idx) => (
          <Text key={`${word.color + idx}`} data={word} />
        ))}
        <Plane />
        <Earth />
        <Light />
      </Camera>
    </Canvas>
  );
}
export default Scene;
