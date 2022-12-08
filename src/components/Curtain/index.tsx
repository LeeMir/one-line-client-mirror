import { MotionValue } from 'framer-motion';

import { CurtainContainer } from './style';

interface CurtainValue {
  progress: MotionValue<number>;
}

const Curtain = ({ progress }: CurtainValue) => {
  return <CurtainContainer style={{ right: progress }} />;
};

export default Curtain;
