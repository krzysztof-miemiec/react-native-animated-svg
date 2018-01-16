import React, { Component } from 'react';
import { G as NativeSvgG } from 'react-native-svg';
import AnimatedSvgFix from './AnimatedSvgFix';

class SvgG extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgG
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgG = AnimatedSvgFix(SvgG);
export default SvgG;
