import Button from '@/components/Button';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import { useNotification } from '@/contexts/notification';
import { useToast } from '@/contexts/toast';
import { useNavigate } from '@/hooks/useNavigate';
import { _tr } from '@/utils/trans';
import React from 'react';
import { StyleSheet } from 'react-native';

export type LoadingScreenProps = {
  //
};

const LoadingScreen = (): JSX.Element => {
  const navigation = useNavigate();

  const notification = useNotification();

  const toast = useToast();

  const goBack = (): void => {
    navigation.goBack();
  };

  const testNotification = (): void => {
    notification.show({
      text: 'notification default',
      type: 'default',
    });
  };

  const testToast = (): void => {
    toast.show({
      text: 'toast default',
      type: 'default',
    });
  };

  return (
    <Modal style={styles.container}>
      <Text>{_tr('loading')}</Text>
      <Button title={'hide'} onPress={goBack} />
      <Button title={'notification'} onPress={testNotification} />
      <Button title={'toast'} onPress={testToast} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});

export default LoadingScreen;
