import React, { Component } from 'react';
import { Svg as NativeSvg } from 'react-native-svg';
import AnimatedSvgFix from './AnimatedSvgFix';

class Svg extends Component {
  setNativeProps = (props) => {
    this._component && this._component.setNativeProps(props);
  };

  render() {
    return (
      <NativeSvg
        ref={component => (this._component = component)}
        {...this.props}
      />
    );
  }
}

export default AnimatedSvgFix(Svg, {
  propString: ['width', 'height']
});
