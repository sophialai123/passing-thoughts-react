
import './App.css';
import React, { useState } from 'react';
import { AddThoughtForm } from './components/AddThoughtForm';
import { Thought } from './components/Thought';
import { generateId, getNewExpirationTime } from './components/utilities';

function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = thought => {
    // returns a new state: the array with the new thought at the front.
    setThoughts((preve) => [thought, ...preve])

  }

  const removeThough = thoughtIdToRemove => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => {
        // return the new array which does not inclues the thoughtIdToRemove
        return thought.id !== thoughtIdToRemove
      }
      ))

  }

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought}
              removeThought={removeThough} />
          ))}
        </ul>
      </main>
    </div>
  );
}


export default App;