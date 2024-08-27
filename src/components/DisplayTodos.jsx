
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const DisplayTodos = ({
  todos,
  setTodos,
  isEditing,
  EditId,
  setisEditing,
  setSearch,
  search,
  searchTodo,
  setSearchTodo,
}) => {
  const [isMultipleDelete, setIsMultipleDelete] = useState(false);
  const [selectedTodos, setSelectedTodos] = useState([]);

  function handleComplete(id) {
    const newTodo = todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTodos(newTodo);
  }

  function handleEdit(id) {
    EditId.current = id;
    setisEditing((prev) => !prev);
  }

  function handleDelete(id) {
    const newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  }

  function handleMultipleDeleteToggle() {
    setIsMultipleDelete((prev) => !prev);
  }

  function handleCheckboxChange(id) {
    if (selectedTodos.includes(id)) {
      setSelectedTodos(selectedTodos.filter((todoId) => todoId !== id));
    } else {
      setSelectedTodos([...selectedTodos, id]);
    }
  }

  function handleDeleteSelected() {
    const newTodos = todos.filter((item) => !selectedTodos.includes(item.id));
    setTodos(newTodos);
    setSelectedTodos([]);
    setIsMultipleDelete(false);
  }

  function handleSearch() {
    console.log(search);
    setSearch((prev) => !prev);
    setSearchTodo([])
  }

  return (
    <div>
      <button onClick={handleMultipleDeleteToggle} className="delt">
        {isMultipleDelete ? "Cancel Multiple Delete" : "Enable Multiple Delete"}
      </button>

      {isMultipleDelete && (
        <button
          onClick={handleDeleteSelected}
          disabled={selectedTodos.length === 0}
          className="delt"
        >
          <MdDelete />
        </button>
      )}

      <button onClick={handleSearch}>
        <FaSearch />
      </button>

      <div>
        {!search
          ? todos.length > 0 &&
            todos.map((item) => (
              <div key={item.id} className="todo-main">
                <div
                  className={`todo child1 ${
                    isMultipleDelete ? "isDisabled" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleComplete(item.id)}
                  />
                  <span
                    className={`${
                      item.completed ? "finished" : "not-finished"
                    }`}
                  >
                    {item.todo}
                  </span>
                  <button
                    className={`${item.completed && "hideEdit"} edit`}
                    onClick={() => handleEdit(item.id)}
                  >
                    <MdEdit />
                  </button>
                  <button
                    className={`${item.completed && "hideEdit"} del`}
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
                {isMultipleDelete && (
                  <input
                    type="checkbox"
                    checked={selectedTodos.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    className="delselec child2"
                  />
                )}
              </div>
            ))
          : searchTodo.map((item) => (
              <div key={item.id} className="todo-main">
                <div
                  className={`todo child1 ${
                    isMultipleDelete ? "isDisabled" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleComplete(item.id)}
                  />
                  <span
                    className={`${
                      item.completed ? "finished" : "not-finished"
                    }`}
                  >
                    {item.todo}
                  </span>
                  <button
                    className={`${item.completed && "hideEdit"} edit`}
                    onClick={() => handleEdit(item.id)}
                  >
                    <MdEdit />
                  </button>
                  <button
                    className={`${item.completed && "hideEdit"} del`}
                    onClick={() => handleDelete(item.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
                {isMultipleDelete && (
                  <input
                    type="checkbox"
                    checked={selectedTodos.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    className="delselec child2"
                  />
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default DisplayTodos;
