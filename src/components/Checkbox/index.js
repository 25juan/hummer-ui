import React, { useState } from 'react';
import './index.less'
import { bool, func } from 'prop-types';

function Checkbox () {
  return (
    <view className="checkbox__box">
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
