import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type TouchProps = TouchableOpacityProps & {
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
};

const Touch = (props: TouchProps): JSX.Element => {
  const { onPress, onPressIn, onPressOut, onLongPress, ...viewProps } = props;

  const handlePress = (): void => {
    onPress?.();
  };

  const handlePressIn = (): void => {
    onPressIn?.();
  };

  const handlePressOut = (): void => {
    onPressOut?.();
  };

  const handleLongPress = (): void => {
    onLongPress?.();
  };

  return (
    <TouchableOpacity
      {...viewProps}
      activeOpacity={viewProps.activeOpacity ?? 0.8}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}
    />
  );
};

export default Touch;
