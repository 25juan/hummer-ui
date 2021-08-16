import React, { useState } from 'react';
import { bool, func } from 'prop-types';

function Checkbox () {
  return (
    <view>
      <image></image>
    </view>
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
