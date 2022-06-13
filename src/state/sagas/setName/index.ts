import { StateList } from '@/state/config';
import { StateSagaCallback } from '@drpiou/react-state';

export const setName: StateSagaCallback<StateList> = (state) => {
  return { user: { name: [state.user.firstname, state.user.lastname].join(' ') } };
};
