import { ThemeColor } from '@/types/theme';
import React from 'react';
import { default as Svg_Import, SvgProps as SvgProps_Import } from 'react-native-svg';

export type SvgPropsChildrenOptions = {
  color: ThemeColor;
  strokeWidth: number;
};

export type SvgProps = SvgProps_Import & {
  color?: ThemeColor;
  strokeWidth?: number;
  children?: ((options: SvgPropsChildrenOptions) => React.ReactNode) | React.ReactNode;
};

const Svg = (props: SvgProps): JSX.Element => {
  const { color, strokeWidth, children, ...svgProps } = props;

  const options = {
    color: color ?? 'dark',
    strokeWidth: strokeWidth ?? 32,
  };

  return <Svg_Import {...svgProps}>{typeof children === 'function' ? children(options) : children}</Svg_Import>;
};

export default Svg;
