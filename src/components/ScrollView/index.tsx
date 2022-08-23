import { useCallbackEvent } from '@drpiou/react-utils';
import { map } from 'lodash';
import React, { useMemo } from 'react';
import { ScrollView as ScrollView_Import, ScrollViewProps as ScrollViewProps_Import, StyleSheet, ViewStyle } from 'react-native';

export type ScrollViewProps = ScrollViewProps_Import & {
  center?: boolean;
  onScroll?: () => void;
};

const ScrollView = (props: ScrollViewProps): JSX.Element => {
  const { style, contentContainerStyle, center, onScroll, ...viewProps } = props;

  const scrollViewStyles = useMemo(() => {
    const viewStyle = [style, contentContainerStyle, center && styles.center];

    const scrollViewStyle: ViewStyle = StyleSheet.flatten(viewStyle);

    const scrollViewContentContainerStyle: ViewStyle = {};

    map(contentContainerStyleAttr, (attribute) => {
      const value = scrollViewStyle[attribute];

      if (value !== undefined) {
        scrollViewContentContainerStyle[attribute] = value as never;

        delete scrollViewStyle[attribute];
      }
    });

    return {
      style: viewStyle,
      scrollViewStyle: scrollViewStyle,
      contentContainerStyle: scrollViewContentContainerStyle,
    };
  }, [style, contentContainerStyle, center]);

  const handleScroll = useCallbackEvent((): void => {
    onScroll?.();
  });

  return (
    <ScrollView_Import
      {...viewProps}
      style={scrollViewStyles.scrollViewStyle}
      contentContainerStyle={scrollViewStyles.contentContainerStyle}
      scrollEventThrottle={viewProps.scrollEventThrottle ?? 200}
      onScroll={handleScroll}
    />
  );
};

const contentContainerStyleAttr: (keyof ViewStyle)[] = [
  'alignContent',
  'alignItems',
  'flexDirection',
  'flexGrow',
  'flexWrap',
  'justifyContent',
  'padding',
  'paddingBottom',
  'paddingEnd',
  'paddingHorizontal',
  'paddingLeft',
  'paddingRight',
  'paddingStart',
  'paddingTop',
  'paddingVertical',
];

const styles = StyleSheet.create({
  center: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScrollView;
