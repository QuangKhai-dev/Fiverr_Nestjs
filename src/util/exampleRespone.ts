export const templateRespone = (status: number, message: string, value?) => {
  return {
    status,
    message,
    content: value,
  };
};
