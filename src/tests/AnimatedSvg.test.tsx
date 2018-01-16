import React from 'react';
import renderer from 'react-test-renderer';
import 'react-native';
import AnimatedSvg from '../components/AnimatedSvg';

it('should render AnimatedSvg correctly', () => {
  renderer.create(
    <AnimatedSvg />
  );
});
