import React, { Component } from 'react';
import { Circle as NativeSvgCircle } from 'react-native-svg';
import AnimatedSvgFix from './AnimatedSvgFix';

export const args = ['r', 'cx', 'cy'];

class SvgCircle extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgCircle
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgCircle = AnimatedSvgFix(SvgCircle, { propString: args });
export default SvgCircle;
