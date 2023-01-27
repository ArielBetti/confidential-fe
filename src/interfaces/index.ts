export type TCreateMessage = {
  title: string,
  subTitle?: string,
  message: string,
};

export type TCreateMessageResponse = {
  id?: string,
} & TCreateMessage;
