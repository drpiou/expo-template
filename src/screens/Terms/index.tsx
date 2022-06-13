import Button from '@/components/Button';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import Text from '@/components/Text';
import { useNavigate } from '@/hooks/useNavigate';
import { _tr } from '@/utils/trans';
import React from 'react';
import { StyleSheet } from 'react-native';

export type TermsScreenProps = {
  //
};

const TermsScreen = (): JSX.Element => {
  const navigation = useNavigate();

  const goBack = (): void => {
    navigation.goBack();
  };

  return (
    <Modal style={styles.container}>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Button title={'hide'} onPress={goBack} />
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Input value={'push keyboard up'} />
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Button title={'hide'} onPress={goBack} />
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
      <Text>{_tr('terms')}</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});

export default TermsScreen;
