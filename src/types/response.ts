import { MessageValue } from './message';

export type IOneLine = MessageValue & {
  user_id: number;
  liked: number;
};

export type IThreeLines = (MessageValue & {
  id: number;
  user_id: number;
  liked: number;
})[];

export type ITitleColor = {
  title: string;
  title_korean: string;
  color: string;
}[];

export type ISendLine = {
  result: string;
};

export type ISelectLineBeforeLogin = {
  id: number;
};

export type IInputLineBeforeLogin = {
  title: string;
  content: string;
};

export type IUserInfo = {
  name: string;
};
