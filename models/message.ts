export type Message = {
  text: string;
  user: string;
  added: Date;
  id: number;
};

let id = 1;
let messages: Message[] = [
  {
    text: 'Hi there!',
    user: 'Example',
    added: new Date(),
    id: 0,
  },
];

export const getAllMessages = () => messages;

export const addMessage = (text: string, user: string): Message => {
  const message: Message = {
    text,
    user,
    added: new Date(),
    id: id++,
  };
  messages.push(message);
  return message;
};

export const deleteMessage = (id: number): void => {
  messages = messages.filter((msg) => msg.id !== id);
};
