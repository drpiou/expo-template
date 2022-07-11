import { UseApiOptions, useAxiosNotification } from '@/hooks/useAxiosNotification';
import { prepareAxios } from '@/lib/Axios';
import { UseAxios, useAxios as useAxios_Import } from '@drpiou/react-axios';

const requests = {
  request: prepareAxios,
};

export const useAxios = (): UseAxios<typeof requests, UseApiOptions> => {
  const options = useAxiosNotification();

  return useAxios_Import(requests, options);
};
