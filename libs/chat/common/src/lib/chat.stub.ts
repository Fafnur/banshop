import { Chat, ChatMessage, ChatMessageCreate } from './chat.interface';

export const CHAT_MESSAGE_STUB: ChatMessage = {
  id: 1,
  created: '2022-03-13T06:42:49.097Z',
  isOwner: true,
  message: 'Здравствуйте. Есть вопрос относительно товара. Можете помочь?',
};

export const CHAT_MESSAGE_OPERATOR_STUB: ChatMessage = {
  id: 2,
  created: '2022-03-13T06:43:00.097Z',
  isOwner: false,
  message: 'Здравствуйте. Какой товар вас интересует?',
};

export const CHAT_MESSAGES_STUB: ChatMessage[] = [CHAT_MESSAGE_STUB, CHAT_MESSAGE_OPERATOR_STUB];

export const CHAT_STUB: Chat = {
  messages: CHAT_MESSAGES_STUB,
};

export const CHAT_MESSAGE_CREATE_STUB: ChatMessageCreate = {
  message: 'Интересует информация о кроссовках Rebook Lite. Есть в наличии 39 размер?',
  isOwner: true,
};

export const CHAT_MESSAGE_CREATED_STUB: ChatMessage = {
  id: 3,
  created: '2022-03-13T06:45:00.097Z',
  isOwner: true,
  message: 'Интересует информация о кроссовках Rebook Lite. Есть в наличии 39 размер?',
};
