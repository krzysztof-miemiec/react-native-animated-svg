import React, { Component } from 'react';
import { Animated } from 'react-native';
import { RadialGradient as NativeSvgRadialGradient } from 'react-native-svg';
import AnimatedSvgStateFix from './AnimatedSvgStateFix';
import AnimatedSvgGradientFix from './AnimatedSvgGradientFix';

export const args = ['fx', 'fy', 'rx', 'ry', 'cx', 'cy', 'r'];

class SvgRadialGradient extends Component {
  render() {
    return (
      <NativeSvgRadialGradient
        {...this.props}
      />
    );
  }
}

SvgRadialGradient = AnimatedSvgGradientFix(SvgRadialGradient);
SvgRadialGradient = AnimatedSvgStateFix(SvgRadialGradient, args, { cancelSetNativeProps: true });
SvgRadialGradient = Animated.createAnimatedComponent(SvgRadialGradient);
export default SvgRadialGradient;
