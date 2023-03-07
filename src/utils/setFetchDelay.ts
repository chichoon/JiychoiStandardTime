import { AxiosResponse } from 'axios';

export function setFetchDelay(ms: number) {
  return (x: AxiosResponse) => {
    return new Promise<AxiosResponse>((resolve) => {
      setTimeout(() => resolve(x), ms);
    });
  };
}
