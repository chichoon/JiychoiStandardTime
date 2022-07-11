import { AxiosResponse } from 'axios';

export const setFetchDelay = (ms: number) => {
  return (x: AxiosResponse) => {
    return new Promise<AxiosResponse>((resolve) => {
      setTimeout(() => resolve(x), ms);
    });
  };
};
