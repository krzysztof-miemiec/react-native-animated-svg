import React, { Component } from 'react';
import { Rect as NativeSvgRect } from 'react-native-svg';
import AnimatedSvgFix from './AnimatedSvgFix';

export const args = ['width', 'height'];

class SvgRect extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgRect
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgRect = AnimatedSvgFix(SvgRect, { propString: args, keepXY: true });
export default SvgRect;
