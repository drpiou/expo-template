import { ThemedProps, withoutTheme, withTheme } from '@/contexts/theme';
import { StatusBar as StatusBar_Import, StatusBarProps as StatusBarProps_Import } from 'expo-status-bar';
import React from 'react';

export type StatusBarProps = ThemedProps<StatusBarProps_Import>;

const StatusBar = (props: StatusBarProps): JSX.Element => {
  const { statusBar, ...statusBarProps } = props;

  return <StatusBar_Import {...withoutTheme(statusBarProps)} style={statusBarProps.style || statusBar} />;
};

export default withTheme()(StatusBar);
