import React, { useState } from 'react';

import {
  SectionTitle,
  SectionContainer,
  TitleImg,
  InputContainer,
  Input,
  InputImg,
  SendButton,
  SendButtonImg,
  SendButtonText,
  ResetButton,
  ResetButtonImg,
  LoginModalContainer,
  LoginModalText,
} from './InputSection.styled';

import { KakaoLogin } from '@/components/OAuthLogin';

import useModal from '@/hooks/useModal';
import useMainPageState from '@/hooks/useMainPageState';
import useLogin from '@/hooks/useLogin';

import { LocationStateValue } from '@/types/location';

import WaiterImg from '@/assets/images/waiter.png';
import XIcon from '@/assets/icons/icon-x.svg';
import SendIcon from '@/assets/icons/icon-send.svg';
import PencilIcon from '@/assets/icons/icon-pen-signature.svg';

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
      delay: 0,
    },
  },
};

const motionChild = {
  hidden: { opacity: 0, y: -25, transition: { ease: 'easeInOut', duration: 0.7 } },
  show: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.7 } },
};

const motionButton = {
  hidden: { opacity: 0, y: 25, transition: { ease: 'easeOut', duration: 0.5 } },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

interface InputSectionValue {
  state?: LocationStateValue;
}

const InputSection = ({ state }: InputSectionValue) => {
  const { showModal } = useModal();
  const { loginWithKakao } = useLogin();
  const { getMainPageState } = useMainPageState();
  const { selectedMsgIdx } = getMainPageState();

  const [text, setText] = useState<string>((state?.content as string) ?? '');

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const resetTextHandler = () => {
    setText('');
  };

  const clickSendBtnHandler = () => {
    showModal({
      type: 'alert',
      children: (
        <LoginModalContainer>
          <LoginModalText>
            <b>한 줄</b>을 남기기 위해서는 <br />
            로그인이 필요합니다.
          </LoginModalText>
          <KakaoLogin onClick={() => loginWithKakao(selectedMsgIdx, text)} />
        </LoginModalContainer>
      ),
    });
  };

  return (
    <SectionContainer variants={motionContainer} initial='hidden' animate='show' exit='hidden'>
      <TitleImg src={WaiterImg} variants={motionChild} layout />
      <SectionTitle variants={motionChild} layout>
        손님의 오늘의 한 줄은 무엇이었나요?
      </SectionTitle>

      <InputContainer variants={motionChild} layout>
        <InputImg src={PencilIcon} />
        <Input value={text} onChange={inputTextHandler} />
        <ResetButton
          onClick={resetTextHandler}
          animate={{ opacity: text !== '' ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <ResetButtonImg src={XIcon} />
        </ResetButton>
      </InputContainer>

      {text !== '' ? (
        <SendButton onClick={clickSendBtnHandler} variants={motionButton}>
          <SendButtonImg src={SendIcon} />
          <SendButtonText>한 줄 전송</SendButtonText>
        </SendButton>
      ) : null}
    </SectionContainer>
  );
};

export default InputSection;
