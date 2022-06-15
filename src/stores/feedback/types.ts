interface BotUser {
  id: string;
  name: string;
  age: number;
  experience: number;
}

interface FeedbackBase {
  id: string;
  text: string;
  sendDate: string;
  isRead: boolean;
  isAnswered: boolean;
}

export interface FeedbackListItem extends FeedbackBase {
  botUser: BotUser;
}

export interface FeedbackDetailItem extends FeedbackBase {
  volunteer: { id: string; name: string };
  readDate: string;
  answerText: string;
  answerDate: string;
}
