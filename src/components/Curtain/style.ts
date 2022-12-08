import styled from 'styled-components';
import { motion } from 'framer-motion';

import CurtainImg from '@/assets/images/curtain.png';

export const CurtainContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  background-image: url('${CurtainImg}');
`;
