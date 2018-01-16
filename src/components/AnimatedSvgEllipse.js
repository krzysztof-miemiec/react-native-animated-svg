import React, { Component } from 'react';
import { Ellipse as NativeSvgEllipse } from 'react-native-svg';
import AnimatedSvgFix from './AnimatedSvgFix';

export const args = ['rx', 'ry', 'cx', 'cy'];

class SvgEllipse extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgEllipse
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgEllipse = AnimatedSvgFix(SvgEllipse, { propString: args });
export default SvgEllipse;
