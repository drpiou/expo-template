import React from 'react';
import { Button as Button_Import, ButtonProps as ButtonProps_Import } from 'react-native';

export type ButtonProps = ButtonProps_Import & {
  //
};

const Button = (props: ButtonProps): JSX.Element => {
  return <Button_Import {...props} />;
};

export default Button;
