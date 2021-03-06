import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState  ] = useState({
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Jenny", age: 23}
    ]
  });

const switchNameHandler = () => {
  setPersonsState({persons: [
    {name: "Maximilliam", age: 28},
    {name: "Manu", age: 29},
    {name: "Jenny", age: 23}
  ]})
};

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age} />
      <Person 
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age}
      click={switchNameHandler}>My hobbies: Movie star</Person>
      <Person 
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age}/>
    </div>
  );

  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi im react app'));
}


export default App;



