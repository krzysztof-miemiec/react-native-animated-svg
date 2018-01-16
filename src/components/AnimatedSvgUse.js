import React, { Component } from 'react';
import { Use as NativeSvgUse } from 'react-native-svg';
import AnimatedSvgFix from './AnimatedSvgFix';

class SvgUse extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgUse
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgUse = AnimatedSvgFix(SvgUse);
export default SvgUse;
