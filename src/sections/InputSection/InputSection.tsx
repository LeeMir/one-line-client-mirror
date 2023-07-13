import { useMutation } from 'react-query';
import React, { useState } from 'react';

import {
  SectionTitle,
  SectionContainer,
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
  SendModalContainer,
  SendModalHeader,
  SendModalText,
  SendModalBtnContainer,
  SendModalBtn,
  SendModalHeaderImg,
  SendModalBtnImg,
} from './InputSection.styled';
import { motionContainer, motionCross, motionRaise, motionSink } from './InputSection.motion';

import { RadioGroup } from '@/components/RadioGroup';
import { KakaoLogin } from '@/components/OAuthLogin';
import { Category } from '@/components/Category';
import { Barista } from '@/components/Barista';

import useModal from '@/hooks/useModal';
import useLogin from '@/hooks/useLogin';
import useCategory from '@/hooks/useCategory';

import { safeLocalStorage } from '@/utils/storage';

import { STORAGE_KEYS } from '@/constants/storageKey';
import { API_KEYS } from '@/constants/apiKey';
import XIcon from '@/assets/icons/icon-x.svg';
import SendIcon from '@/assets/icons/icon-send.svg';
import PencilIcon from '@/assets/icons/icon-pen-signature.svg';
import MailboxIcon from '@/assets/icons/icon-mailbox.svg';
import MailSendIcon from '@/assets/icons/icon-mail-send.svg';
import { fetchSendLine } from '@/apis/line';

const InputSection = () => {
  const { showModal, hideModal } = useModal();
  const { getMe, loginWithKakao } = useLogin();

  const [text, setText] = useState<string>(
    safeLocalStorage.get(STORAGE_KEYS.INPUTED_LINE_CONTENT, false) ?? '',
  );
  const categoryList = Object.keys(useCategory());
  const [category, setCategory] = useState<string>(
    safeLocalStorage.get(STORAGE_KEYS.INPUTED_LINE_CATEGORY, false) ?? categoryList[0] ?? '',
  );

  const sendLineMutation = useMutation(API_KEYS.SEND_LINE, fetchSendLine);

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  const resetTextHandler = () => {
    setText('');
  };

  const sendHandler = () => {
    sendLineMutation.mutate({ title: category, content: text });

    hideModal();
  };

  const clickSendBtnHandler = () => {
    if (getMe().isLogined) {
      showModal({
        type: 'alert',
        children: (
          <SendModalContainer>
            <SendModalHeader>
              <SendModalHeaderImg src={MailboxIcon} />한 줄 전송
            </SendModalHeader>
            <SendModalText>
              <Category category={category} />
              {text}
            </SendModalText>
            <SendModalBtnContainer>
              <SendModalBtn onClick={hideModal}>취소</SendModalBtn>
              <SendModalBtn onClick={sendHandler} isPrimary>
                <SendModalBtnImg src={MailSendIcon} />
                전송하기
              </SendModalBtn>
            </SendModalBtnContainer>
          </SendModalContainer>
        ),
      });
    } else {
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
      <Barista variants={motionSink} layout />

      {text === '' ? (
        <SectionTitle variants={motionSink} layout>
          {getMe().name}님의 오늘의 한 줄은 무엇이었나요?
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
