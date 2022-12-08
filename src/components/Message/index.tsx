import { Variants } from 'framer-motion';

import { MessageContainer, MessageWrapper, RecommendBtn, RecommendImg } from './style';

import Category from '@/components/Category';

import { MessageValue } from '@/types/message';

import RecommendIcon from '@/assets/icons/icon-recommend.svg';

interface MessageComponentValue extends MessageValue {
  variants: Variants;
  onClick: () => void;
}

const Message = ({ variants, category, message, onClick }: MessageComponentValue) => {
  return (
    <MessageContainer variants={variants}>
      <Category category={category} />
      <MessageWrapper>{message}</MessageWrapper>
      <RecommendBtn onClick={onClick}>
        <RecommendImg src={RecommendIcon} />
      </RecommendBtn>
    </MessageContainer>
  );
};

export default Message;
