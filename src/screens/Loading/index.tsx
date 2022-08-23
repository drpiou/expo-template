import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import { useNotification } from '@/contexts/notification';
import { useToast } from '@/contexts/toast';
import { useNavigate } from '@/hooks/useNavigate';
import { _tr } from '@/utils/trans';
import { useCallbackEvent } from '@drpiou/react-utils';
import React from 'react';
import { StyleSheet } from 'react-native';

const LoadingScreen = (): JSX.Element => {
  const navigation = useNavigate();

  const notification = useNotification();

  const toast = useToast();

  const handleBack = useCallbackEvent((): void => {
    navigation.goBack();
  });

  const handleNotification = useCallbackEvent((): void => {
    notification.show({
      text: 'notification default',
      type: 'default',
    });
  });

  const handleToast = useCallbackEvent((): void => {
    toast.show({
      text: 'toast default',
      type: 'default',
    });
  });

  return (
    <Modal style={styles.container}>
      <Text>{_tr('loading')}</Text>
      <Button title={'hide'} onPress={handleBack} />
      <Button title={'notification'} onPress={handleNotification} />
      <Button title={'toast'} onPress={handleToast} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});

export default LoadingScreen;
