import React from "react";
import { connect } from 'react-redux'
import { postToApi, inputChange } from "./reducer";

export function FormInput(props) {
    const onSubmit = evt => {
        evt.preventDefault()
        props.postToApi(props.userInput)
    }

    const onChange = evt => {
        const { value } = evt.target
        props.inputChange(value)
    }
    
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={props.userInput}
        placeholder="Yodafy your words"
      />
      <input type="submit" />
    </form>
  );
}

export default connect(state => state, {postToApi, inputChange} )(FormInput)