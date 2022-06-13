import Svg, { SvgProps } from '@/components/Svg';
import { ThemedProps, withoutTheme, withTheme } from '@/contexts/theme';
import React from 'react';
import { Path } from 'react-native-svg';

export type SvgAddOutlineProps = ThemedProps<
  SvgProps & {
    //
  }
>;

const SvgAddOutline = (props: SvgAddOutlineProps): JSX.Element => {
  const { colors } = props;

  return (
    <Svg viewBox={'0 0 512 512'} {...withoutTheme(props)}>
      {({ color, strokeWidth }): React.ReactNode => (
        <Path
          fill={'none'}
          stroke={colors.text[color]}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
          strokeWidth={strokeWidth}
          d={'M256 112v288m144-144H112'}
        />
      )}
    </Svg>
  );
};

export default withTheme()(SvgAddOutline);
