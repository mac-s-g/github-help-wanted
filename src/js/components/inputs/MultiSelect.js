import React from 'react'
import {Dropdown} from 'semantic-ui-react'

class MultiSelect extends React.Component {

  state = {
    additions: [],
    searchQuery: ""
  }

  createDropdownItem = (value) => {
    return {
      key: value.toLowerCase().replace(/\s+/g, '-'),
      value: value.toLowerCase().replace(/\s+/g, '-'),
      text: value
    }
  }

  render() {
    const {additions, searchQuery} = this.state;
    const {options, placeholder, onChange, value} = this.props;

    return <Dropdown
      placeholder={placeholder}
      fluid
      search
      multiple
      selection
      closeOnChange
      allowAdditions
      value={value.map((val) => this.createDropdownItem(val)['value'])}
      searchQuery={searchQuery}
      onSearchChange={(e, {searchQuery}) => {
        this.setState({
          searchQuery: searchQuery
        })
      }}
      onChange={(e, {value})=>{
        console.log('VAL CHANGED', value)
        this.setState({searchQuery: ""})
        onChange(value);
      }}
      onAddItem={(e, {value}) => {
        const existing = additions.concat(options)
        const input = value.toLowerCase()
        for (let option of existing) {
          if (input == option.toLowerCase()) {
            return
          }
        }
        this.setState({
          additions: [value, ...this.state.additions],
          searchQuery: ""
        })

      }}
      options={[
        ...additions.concat(options).map((option) => {
          return this.createDropdownItem(option)
        })
      ]} />
  }
}

export default MultiSelect
