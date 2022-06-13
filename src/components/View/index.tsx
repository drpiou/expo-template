import React from 'react';
import { StyleSheet, View as View_Import, ViewProps as ViewProps_Import } from 'react-native';

export type ViewProps = ViewProps_Import & {
  center?: boolean;
};

const View = (props: ViewProps): JSX.Element => {
  const { style, center, ...viewProps } = props;

  return <View_Import {...viewProps} style={[style, center && styles.center]} />;
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default View;
