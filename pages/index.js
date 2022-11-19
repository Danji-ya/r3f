import Scene from '../components/Scene';
import { randomColor, randomPos } from '../utils/common';
import styles from './index.module.scss';

export default function Home() {
  const words = [];
  for (let i = 0; i < 5; i += 1) {
    words.push({
      text: 'a',
      color: randomColor(),
      position: [randomPos(), randomPos(), randomPos({ min: 0, max: 3 })],
    });
  }

  return (
    <div className={styles.INDEX}>
      <Scene words={words} />
    </div>
  );
}
