import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {

  const [text, setText] = useState(" ");

  const handleTextChange = (event) => {
    //will be called when the input changes. 
    setText(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()

    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }

    //bug here
    //call addThough only have input values
    if (text.length > 0) {
      props.addThought(thought)
      //clear the inputs after added
      setText(' ')
    }

  }
  return (
    <form className="AddThoughtForm"
      onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
