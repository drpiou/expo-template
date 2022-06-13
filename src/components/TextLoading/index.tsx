import Text, { TextProps } from '@/components/Text';
import React from 'react';

export type TextLoadingProps = TextProps & {
  //
};

const TextLoading = (props: TextLoadingProps): JSX.Element => {
  return <Text {...props} />;
};

export default TextLoading;
