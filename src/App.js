
import React from 'react';
import './App.css';
import { UserChildren, UserClass, UserFunction } from './user';

const users = [
  { name: 'Luka', age: 25},
  { name: 'Domi', age: 29},
  {name: 'Karlito', age: 26},
]

 class App extends React.Component 
 {

  render(){
    return (
      <>
        <h1>React App</h1>
        <UserClass name={users[0].name} age={users[0].age} />
        <UserFunction name={users[2].name} age={users[2].age} />
        <UserChildren name={users[1].name} age={users[1].age}>
            I'm the oldest of them!
        </UserChildren>
      </>
    );
  }
}
export default App;