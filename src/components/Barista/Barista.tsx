import { useRef } from 'react';
import { Variants } from 'framer-motion';

import { BaristaImg, BaristaWrapper } from './Barista.styled';

interface BaristaValue {
  variants?: Variants;
  layout?: boolean;
}

const Barista = ({ variants, layout }: BaristaValue) => {
  const keyRef = useRef<number>((Math.floor(new Date().getSeconds()) % 5) + 1);
  const src = `/barista-${keyRef.current}.png`;

  return (
    <BaristaWrapper>
      <BaristaImg alt='barista' src={src} variants={variants} layout={layout} />
    </BaristaWrapper>
  );
};

export default Barista;
