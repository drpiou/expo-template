import * as Network from 'expo-network';

export const getNetworkState = async (): Promise<Network.NetworkState> => {
  return Network.getNetworkStateAsync();
};

export const isNetworkConnected = async (): Promise<boolean> => {
  const state = await getNetworkState();

  return Boolean(state.isConnected && state.isInternetReachable);
};
