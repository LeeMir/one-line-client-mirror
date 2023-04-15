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
  CategoryRadioGroupContainer,
} from './InputSection.styled';
import { motionContainer, motionCross, motionRaise, motionSink } from './InputSection.motion';

import { RadioGroup } from '@/components/RadioGroup';
import { KakaoLogin } from '@/components/OAuthLogin';
import { Category } from '@/components/Category';

import useModal from '@/hooks/useModal';
import useLogin from '@/hooks/useLogin';
import useCategory from '@/hooks/useCategory';

import { safeLocalStorage } from '@/utils/storage';

import { STORAGE_KEYS } from '@/constants/storageKey';
import WaiterImg from '@/assets/images/waiter.png';
import XIcon from '@/assets/icons/icon-x.svg';
import SendIcon from '@/assets/icons/icon-send.svg';
import PencilIcon from '@/assets/icons/icon-pen-signature.svg';

const InputSection = () => {
  const { showModal } = useModal();
  const { getMe, loginWithKakao } = useLogin();

  const [text, setText] = useState<string>(
    safeLocalStorage.get(STORAGE_KEYS.INPUTED_LINE_CONTENT, false) ?? '',
  );
  const categoryList = Object.keys(useCategory());
  const [category, setCategory] = useState<string>(
    safeLocalStorage.get(STORAGE_KEYS.INPUTED_LINE_CATEGORY, false) ?? categoryList[0] ?? '',
  );

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const resetTextHandler = () => {
    setText('');
  };

  const clickSendBtnHandler = () => {
    if (!getMe().isLogined) {
      safeLocalStorage.set(STORAGE_KEYS.INPUTED_LINE_CATEGORY, category);
      safeLocalStorage.set(STORAGE_KEYS.INPUTED_LINE_CONTENT, text);

      showModal({
        type: 'alert',
        children: (
          <LoginModalContainer>
            <LoginModalText>
              <b>한 줄</b>을 남기기 위해서는 <br />
              로그인이 필요합니다.
            </LoginModalText>
            <KakaoLogin onClick={() => loginWithKakao()} />
          </LoginModalContainer>
        ),
      });
    }
  };

  return (
    <SectionContainer variants={motionContainer} initial='hidden' animate='show' exit='hidden'>
      <TitleImg src={WaiterImg} variants={motionSink} layout />

      {text === '' ? (
        <SectionTitle variants={motionSink} layout>
          손님의 오늘의 한 줄은 무엇이었나요?
        </SectionTitle>
      ) : null}

      {text !== '' ? (
        <CategoryRadioGroupContainer variants={motionCross} layout>
          <RadioGroup name='select-category' value={category} setValue={setCategory}>
            {categoryList.map((key) => (
              <Category key={key} category={key} value={key} disabled={category !== key} />
            ))}
          </RadioGroup>
        </CategoryRadioGroupContainer>
      ) : null}

      <InputContainer variants={motionSink} layout>
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
        <SendButton onClick={clickSendBtnHandler} variants={motionRaise}>
          <SendButtonImg src={SendIcon} />
          <SendButtonText>한 줄 전송</SendButtonText>
        </SendButton>
      ) : null}
    </SectionContainer>
  );
};

export default InputSection;
