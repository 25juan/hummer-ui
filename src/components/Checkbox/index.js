import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import View from '../View';
import Text from "../Text";
import Image from "../Image";
import './index.less'

function Checkbox () {
  return (
    <View className="checkbox__box">
      <Image/>
      <Text>hello world</Text>
    </View>
  )
}
Checkbox.propTypes = {
  checked: bool,
  onChange: func
};
Checkbox.defaultProps = {
  checked: false
};
export default Checkbox;
