import Button from '@/components/Button';
import Input from '@/components/Input';
import Page from '@/components/Page';
import SvgAddOutline from '@/components/SvgAddOutline';
import Text from '@/components/Text';
import { useNotification } from '@/contexts/notification';
import { useGlobalState } from '@/contexts/state';
import { useTheme } from '@/contexts/theme';
import { useToast } from '@/contexts/toast';
import { useApi } from '@/hooks/useApi';
import { useAxios } from '@/hooks/useAxios';
import { useNavigate } from '@/hooks/useNavigate';
import { restart } from '@/lib/Restart';
import { debug } from '@/utils/debug';
import { _tr } from '@/utils/trans';
import { useCallbackEvent, useOnMount, useOnUnmount, useStateSafe } from '@drpiou/react-utils';
import React from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigate();

  const notification = useNotification();

  const toast = useToast();

  const api = useApi();

  const axios = useAxios();

  const { state, setState } = useGlobalState();

  const { theme, setTheme } = useTheme();

  const [inputValue, setInputValue] = useStateSafe<string>(state.user.firstname);

  useOnMount(() => {
    debug.log('__DEV__:useOnMount', { name: state.user.name });
  });

  useOnUnmount(() => {
    debug.log('__DEV__:useOnUnmount', { name: state.user.name });
  });

  const handleTerms = useCallbackEvent((): void => {
    navigation.navigate('Terms');
  });

  const handleLoading = useCallbackEvent((): void => {
    navigation.navigate('Loading');
  });

  const handleApi = useCallbackEvent((): void => {
    void api.getTranslation({ lang_code: 'fr' }).start({
      showError: true,
      showSuccess: true,
    });
  });

  const handleAxios = useCallbackEvent((): void => {
    void axios
      .request({
        baseURL: 'https://api.domain.com',
        url: 'translation',
        method: 'GET',
        timeout: 1000,
      })
      .start({
        showError: true,
        showSuccess: true,
      });
  });

  const handleNotification = useCallbackEvent((): void => {
    notification.show({
      text: 'notification default',
      type: 'default',
    });

    notification.show({
      text: 'notification info',
      type: 'info',
      onClose: () => undefined,
    });

    notification.show({
      text: 'notification success',
      type: 'success',
    });

    notification.show({
      text: 'notification error',
      type: 'error',
      onClose: () => undefined,
    });
  });

  const handleToast = useCallbackEvent((): void => {
    toast.show({
      text: 'toast default',
      type: 'default',
    });

    toast.show({
      text: 'toast info',
      type: 'info',
    });

    toast.show({
      text: 'toast success',
      type: 'success',
    });

    toast.show({
      text: 'toast error',
      type: 'error',
    });
  });

  const handleTheme = useCallbackEvent((): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  });

  const handleInput = useCallbackEvent((value: string): void => {
    setInputValue(value);
  });

  const handleSave = useCallbackEvent((): void => {
    setState({ user: { firstname: inputValue } });
  });

  const handleRestart = useCallbackEvent((): void => {
    restart();
  });

  return (
    <Page style={styles.container}>
      <Text>{_tr('home')}</Text>
      <Text>{state.user.firstname}</Text>
      <Text>{state.user.lastname}</Text>
      <Text>{state.user.name}</Text>
      <SvgAddOutline width={50} height={50} />
      <Button title={'go terms'} onPress={handleTerms} />
      <Button title={'show loading'} onPress={handleLoading} />
      <Button title={'api'} onPress={handleApi} />
      <Button title={'axios'} onPress={handleAxios} />
      <Button title={'notification'} onPress={handleNotification} />
      <Button title={'toast'} onPress={handleToast} />
      <Button title={'theme'} onPress={handleTheme} />
      <Input value={inputValue} onChangeText={handleInput} />
      <Button title={'save'} onPress={handleSave} />
      <Button title={'restart'} onPress={handleRestart} />
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});

export default HomeScreen;
