
import "./App.css";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import {db} from "./firebase_config";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import TodoListItem from './Todo.js';


function App() {
  const [todos, setToDos] = useState([]);
  const [todoInput, setToDoInput] = useState("");

useEffect(() => {
getToDos();

},  []);
 function getToDos(){
db.collection("todos").onSnapshot(function (querySnapshot) {
setToDos(
querySnapshot.docs.map((doc) =>({
id: doc.id,
todo: doc.data().todo,
inprogress: doc.data().inprogress
}))
);
});
 }


  function addToDo(e) {

  e.preventDefault();

  db.collection("todos").add({
  inprogress: true,
  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  todo: todoInput,
  });

  setToDoInput("");
console.log('you are tryingto add a todo');
  }

  return (
    <div className="App"
     style={{display: "flex",flexDirection: "column" ,justifyContent: "center",
     alignItems: "center"}}>
      <div>

      <h1>Gregory Aloias Task App</h1>
      <form>
      <TextField id="standard-basic" label="Enter A Task" variant="standard"
            value={todoInput}
            onChange={(e) => setToDoInput(e.target.value)}
            style={{ maxWidth: "300px", width: "90vw"}}/>
            <Button type = "submit" variant="contained" onClick={addToDo} >Add Task</Button>

      </form>
      {todos.map((todo) =>(
      <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
      ))}
      </div>
    </div>
  );
}

export default App;
