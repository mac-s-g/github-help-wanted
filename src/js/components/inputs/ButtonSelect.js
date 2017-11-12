import React from 'react'

import { Dropdown } from 'semantic-ui-react'

const ButtonSelect = ({options, value, onChange}) => (
  <Dropdown
    style={{marginRight: '0px'}}
    button
    pointing='top right'
    onChange={(e, val)=>{
      if (val.value != value) {
        onChange(val.value);
      }
    }}
    options={options}
    value={value} />
)

export default ButtonSelect