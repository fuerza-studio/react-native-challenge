import { Response } from 'miragejs';

const handleErrors = (error: any, message = 'An error ocurred') => {
  console.error('Error: ', error);
  return new Response(400, undefined, {
    data: {
      message,
      isError: true,
    },
  });
};

export default handleErrors;
