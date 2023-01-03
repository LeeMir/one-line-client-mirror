import { MessageValue } from './message';

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
