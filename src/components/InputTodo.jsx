import React, { useEffect, useState } from "react";
const InputTodo = ({ todos, setTodos, isEditing, EditId, setisEditing ,search, searchTodo, setSearchTodo}) => {
  const [todo, setTodo] = useState("");

  useEffect(()=>{
    if(EditId.current!=-1)
    {
      const EditVal= todos.filter((item)=>{
        if(item.id==EditId.current)
        {
          return item
        }
      })
    setTodo(EditVal[0].todo)
      return()=>{
        EditId.current=-1;
      }
    }
  },[EditId,isEditing])
  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit() {
    if (todo !== "") {
      setTodos((prev) => [
        { id: prev.length+Math.random()*10, todo, completed: false },
        ...prev,
      ]);
      setTodo("");
      console.log(todos);
    }
  }
  function handleSave() {
    if (todo !== "" && isEditing) {
      // setTodos(prev=>[...prev,{id:prev.length,todo,completed:false}])
      const newTodo = todos.map((item) => {
        if (item.id == EditId.current) {
          console.log(item.id);
          item.todo = todo;
        }
        return item;
      });
      setTodos(newTodo);
      setTodo("");
      setisEditing(false);
      EditId.current = -1;
      console.log(todos);
    }
  }
  function handleSearch(){
       const newTodo = todos.filter((item) => {
        if (item.todo.includes(todo)) {
          console.log(item.id);
          return item
        }
      });
    console.log(newTodo)
    setSearchTodo(newTodo)
      setTodo("");
  }
  return (
    <div className="input-main">
      <input
        onChange={(e) => handleChange(e)}
        value={todo}
        type="text"
        name=""
        id=""
      />
      {isEditing ? (
        <button onClick={handleSave}>save</button>
      ):search ?<button onClick={handleSearch}>search</button> :(
        <button onClick={handleSubmit}>add</button>
      )}
    </div>
  );
};

export default InputTodo;
