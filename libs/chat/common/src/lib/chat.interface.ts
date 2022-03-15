export enum ChatKeys {
  ChatMessages = 'chatMessages',
}

export interface Chat {
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: number;
  created: string;
  isOwner: boolean;
  message: string;
}

export interface ChatMessageCreate {
  message: string;
  isOwner: boolean;
}
