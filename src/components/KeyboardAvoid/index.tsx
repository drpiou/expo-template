import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from 'react-native';

export type KeyboardAvoidProps = KeyboardAvoidingViewProps & {
  //
};

const KeyboardAvoid = (props: React.PropsWithChildren<KeyboardAvoidProps>): JSX.Element => {
  return <KeyboardAvoidingView {...props} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} />;
};

export default KeyboardAvoid;
