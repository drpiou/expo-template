import { state } from '@/state/config';
import { sagas } from '@/state/sagas';
import { createStateContext } from '@drpiou/react-state';

export const [useGlobalState, GlobalStateProvider] = createStateContext(state, {
  log: __DEV__,
  sagas,
});
