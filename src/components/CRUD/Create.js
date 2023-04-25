import React, { useRef, useState } from "react";

function Create() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([
    {
      text: "This is my first Note",
    },
    {
      text: "This is my Next Note",
    },
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    inputValue && addTask(inputValue);
    setInputValue("");
    console.log(inputValue);
  };
  const addTask = (text) => setTask([...task, { text }]);

  const handelTrash = (index) => {
    const newTask = [...task];
    newTask.splice(index, 1);
    setTask(newTask);
  };

  return (
    <div className='container'>
      <form onSubmit={handleClick}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        &nbsp;
        <button type='submit' className='btn btn-success'>
          Add
        </button>
      </form>
      <ul>
        {task.map((tasks, index) => {
          return (
            <div key={index}>
              <li style={{ padding: "10px 0px", listStyle:"none"}} >
                {tasks.text}&nbsp; &nbsp; &nbsp;
                <button
                  className='btn btn-danger'
                  onClick={() => handelTrash(index)}>
                  -
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Create;
