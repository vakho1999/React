import Search from './components/Search';
import {todos as Todos} from '../src/components/todoList'
import React, {useState} from 'react';
import './App.css';

function App() {
  const [searchtext,setsearchText] = useState("");
  const [todolist,setTodolist] = useState(
    {
      'Backlog': {
        'items':[ {'title': 'Card Title','context':'lorem ipsum morgalis varada','selectedDate': new Date()}  ],
        'color': 'red'
      },
      'To Do': {
        'items':[{'title': 'Card Title','context':'lorem ipsum morgalis varada','selectedDate': new Date()}],
        'color':'pink'
      },
      'In Progress': {
        'items':[],
        'color':'green'

      },
      'Done': {
        'items':[],
        'color':'lime'
      }
    }
  );
  return (
    <div className="App">
      <div className='container'>
          <Search setsearchText={setsearchText}/>
          <Todos searchtext={searchtext} todolist={{todolist,setTodolist}}/> 
      </div>
    </div>
  );
}

export default App;
