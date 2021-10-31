type Options = {
  method: string;
  headers: {
    [key: string]: string;
  };
  body?: string;
};

const BASE_URL = 'https://swapi.dev/api/';

export const request = async <TData>(
  path: RequestInfo,
  method = 'GET',
  body?: string
): Promise<TData> => {
  const options: Options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    options.body = body;
  }

  const response = await fetch(`${BASE_URL}/${path}`, options);

  return response.json();
};
