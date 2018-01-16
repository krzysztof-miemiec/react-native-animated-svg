import React, { Component } from 'react';
import { Path as NativeSvgPath } from 'react-native-svg';

import AnimatedSvgFix from './AnimatedSvgFix';

class SvgPath extends Component {
  setNativeProps = (props = {}) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgPath
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgPath = AnimatedSvgFix(SvgPath);
export default SvgPath;
