/**
 * Problem: What is the best way to animate a path with animated.value?
 * Solution: This demonstrates how you can do it with flubber
 * BUG: array interpolators doesn't work (options.single = false)
 */
import React, { Component } from 'react';
import { Animated } from 'react-native';
import { G } from 'react-native-svg';
import * as flubber from 'flubber';
import omit from 'lodash/omit';

import Path from './AnimatedSvgPath';

export const flubberArgsForType = {
  interpolate: ['fromShape', 'toShape', 'options'],
  toCircle: ['fromShape', 'x', 'y', 'r', 'options'],
  toRect: ['fromShape', 'x', 'y', 'width', 'height', 'options'],
  fromCircle: ['x', 'y', 'r', 'toShape', 'options'],
  fromRect: ['x', 'y', 'width', 'height', 'toShape', 'options'],
  separate: ['fromShape', 'toShapeList', 'options'],
  combine: ['fromShapeList', 'toShape', 'options'],
  interpolateAll: ['fromShapeList', 'toShapeList', 'options'],
};

function createInterpolator(props: any) {
  if (props.interpolator) {
    return props.interpolator;
  }
  const argsForType = flubberArgsForType[props.interpolatorType];
  const args = argsForType.map(key => props[key]);
  return flubber[props.interpolatorType](...args);
}

interface Props {
  t?: number;
  interpolatorType?: string;
  interpolator: any;
}

class SvgFlubberPath extends Component<Props> {
  static defaultProps = {
    t: 0,
    interpolatorType: 'interpolate',
  };
  components: any[];
  component: any;
  interpolator: any;

  constructor(props: Props) {
    super(props);
    this.components = [];
    this.interpolator = createInterpolator(props);
  }

  setNativeProps = props => {
    if (props.t) {
      if (Array.isArray(this.interpolator)) {
        this.interpolator.forEach((childInterpolator, i) => {
          const component = this.components[i];
          if (component) {
            component.setNativeProps({ d: childInterpolator(props.t) });
          }
        });
      } else {
        props.d = this.interpolator(props.t);
      }
    }
    if (this.component) {
      this.component.setNativeProps(props);
    }
  };

  shouldComponentUpdate(nextProps: Props) {
    const typeChanged =
      nextProps.interpolatorType !== this.props.interpolatorType;
    const interpolatorChanged = nextProps.interpolator !== this.props.interpolator;
    const args = flubberArgsForType[nextProps.interpolatorType] || [];
    const argChanged = args.some((key) => nextProps[key] !== this.props[key]);
    if (typeChanged || interpolatorChanged || argChanged) {
      this.interpolator = createInterpolator(nextProps);
      return true;
    }
    return false;
  }

  render() {
    const args = flubberArgsForType[this.props.interpolatorType];
    const filteredProps: any = omit(this.props, args);
    const {
      t,
      interpolatorType,
      interpolator,
      children,
      ...rest,
    } = filteredProps;
    if (Array.isArray(this.interpolator)) {
      return (
        <G
          ref={component => (this.component = component)}
          {...rest}
        >
          {this.interpolator.map((childInterpolator, i) => {
            return (
              <SvgFlubberPath
                ref={component =>
                  (this.components[i] = component)}
                key={i}
                t={t}
                interpolator={childInterpolator}
              />
            );
          })}
        </G>
      );
    }
    const d = this.interpolator(t);
    return (
      <Path
        ref={component => (this.component = component)}
        {...rest}
        d={d}
      />
    );
  }
}

export default Animated.createAnimatedComponent(SvgFlubberPath);
