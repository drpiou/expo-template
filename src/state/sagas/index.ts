import { StateList } from '@/state/config';
import { setName } from '@/state/sagas/setName';
import { StateSaga } from '@drpiou/react-state';

export const sagas: StateSaga<StateList>[] = [
  {
    keys: ['user.firstname', 'user.lastname'],
    saga: setName,
  },
];
