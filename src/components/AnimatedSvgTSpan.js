import React, { Component } from 'react';
import { TSpan as NativeSvgTSpan } from 'react-native-svg';
import AnimatedSvgTextFix from './AnimatedSvgTextFix';

class SvgTSpan extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvgTSpan
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

SvgTSpan = AnimatedSvgTextFix(SvgTSpan);
export default SvgTSpan;
