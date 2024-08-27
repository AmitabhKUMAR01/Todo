import React, { useRef, useState } from "react";
import InputTodo from "../components/InputTodo";
import DisplayTodos from "../components/DisplayTodos.jsx";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [searchTodo,setSearchTodo] = useState([])
  const [isEditing ,setisEditing]=useState(false) ;

  const [search, setSearch] = useState(false);
  let EditId = useRef(-1);
  return (
    
      <div className="main-todo">
        <InputTodo searchTodo={searchTodo} setSearchTodo={setSearchTodo} search={search} setSearch={setSearch} todos={todos} setTodos={setTodos} isEditing={isEditing} EditId={EditId} setisEditing={setisEditing}/>
        <DisplayTodos searchTodo={searchTodo} setSearchTodo={setSearchTodo} search={search} setSearch={setSearch} todos={todos}  setTodos={setTodos} isEditing={isEditing} EditId={EditId} setisEditing={setisEditing}/>
      </div>
  );
};
export default Todo;
