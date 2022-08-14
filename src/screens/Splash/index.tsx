import Button from '@/components/Button';
import Screen from '@/components/Screen';
import Text from '@/components/Text';
import { useNavigate } from '@/hooks/useNavigate';
import { applyTranslation } from '@/lib/Localization';
import { api } from '@/src/api';
import { ThemeKey } from '@/src/themes';
import { StorageItem } from '@/types/asyncStorage';
import { storage } from '@/utils/storage';
import { _tr } from '@/utils/trans';
import { useOnMount, useStateSafe } from '@drpiou/react-utils';
import React from 'react';

const SplashScreen = (): JSX.Element => {
  const navigation = useNavigate();

  const [loaded, setLoaded] = useStateSafe<boolean>(false);

  const theme: ThemeKey = 'dark';

  const goToHome = (): void => {
    navigation.navigate('Home');
  };

  const initTrans = async (): Promise<void> => {
    const langCode = await storage.getItem(StorageItem.LANG_CODE, 'en');

    const translation = await api.getTranslation({ lang_code: langCode }).start();

    if (!translation.isError) {
      applyTranslation(langCode, translation.data);
    }
  };

  const init = async (): Promise<void> => {
    await initTrans();

    setLoaded(true);

    goToHome();
  };

  useOnMount(() => {
    void init();
  });

  return (
    <Screen theme={theme} scrollEnabled={false}>
      <Text theme={theme}>{_tr('loading')}</Text>

      {loaded && <Button title={'go home'} onPress={goToHome} />}
    </Screen>
  );
};

export default SplashScreen;
