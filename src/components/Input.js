import React from 'react'

const Input = (props) => {
  return (
    <div className="input">
      <p>Search</p>
      <input
        type="text"
        className="input-field"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
}

export default Input
