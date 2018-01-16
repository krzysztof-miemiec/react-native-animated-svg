import React, { Component } from 'react';
import { Line as NativeSvgLine } from 'react-native-svg';
import AnimatedSvgFix from './AnimatedSvgFix';

export const args = ['x1', 'y1', 'x2', 'y2'];

class SvgLine extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgLine
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgLine = AnimatedSvgFix(SvgLine, { propString: args });
export default SvgLine;
