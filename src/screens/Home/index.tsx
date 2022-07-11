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
import { useOnMount, useOnUnmount, useStateSafe } from '@drpiou/react-utils';
import React from 'react';
import { StyleSheet } from 'react-native';

const HomeScreen = (): JSX.Element => {
  const navigation = useNavigate();

  const notification = useNotification();

  const toast = useToast();

  const api = useApi();

  const axios = useAxios();

  const { user, setState } = useGlobalState(['user']);

  const { theme, setTheme } = useTheme();

  const [inputValue, setInputValue] = useStateSafe<string>(user.firstname);

  useOnMount(() => {
    debug.log('__DEV__:useOnMount', { name: user.name });
  });

  useOnUnmount(() => {
    debug.log('__DEV__:useOnUnmount', { name: user.name });
  });

  const goToTerms = (): void => {
    navigation.navigate('Terms');
  };

  const showLoading = (): void => {
    navigation.navigate('Loading');
  };

  const testApi = (): void => {
    void api.getTranslation(
      { lang_code: 'fr' },
      {
        showError: true,
        showSuccess: true,
      },
    );
  };

  const testAxios = (): void => {
    void axios.request(
      {
        url: 'translation',
        method: 'GET',
        baseURL: 'https://api.domain.com',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
        },
        timeout: 1000,
      },
      {
        showError: true,
        showSuccess: true,
      },
    );
  };

  const testNotification = (): void => {
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
  };

  const testToast = (): void => {
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
  };

  const testTheme = (): void => {
    setTheme(theme === 'default' ? 'dark' : 'default');
  };

  const testInput = (value: string): void => {
    setInputValue(value);
  };

  const testSave = (): void => {
    setState({ user: { firstname: inputValue } });
  };

  const testRestart = (): void => {
    restart();
  };

  return (
    <Page style={styles.container}>
      <Text>{_tr('home')}</Text>
      <Text>{user.firstname}</Text>
      <Text>{user.lastname}</Text>
      <Text>{user.name}</Text>
      <SvgAddOutline width={50} height={50} />
      <Button title={'go terms'} onPress={goToTerms} />
      <Button title={'show loading'} onPress={showLoading} />
      <Button title={'api'} onPress={testApi} />
      <Button title={'axios'} onPress={testAxios} />
      <Button title={'notification'} onPress={testNotification} />
      <Button title={'toast'} onPress={testToast} />
      <Button title={'theme'} onPress={testTheme} />
      <Input value={inputValue} onChangeText={testInput} />
      <Button title={'save'} onPress={testSave} />
      <Button title={'restart'} onPress={testRestart} />
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});

export default HomeScreen;
