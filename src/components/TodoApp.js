import React, { useState } from "react";

function TodoApp() {
  const [list, setList] = useState("");
  const [listArr, setListArr] = useState([]);
  const [listArrIndex, setListArrIndex] = useState(-1)
  const [listIndexValue, setListIndexValue] = useState("")
  const handleAdd = () => {
    if (list.trim !== "") {
      setListArr([...listArr, list]);
      setList("");
    }
  };
  const handleEdit = (index) => {
    

  }
  return (
    <>
  <h1>hello</h1>
    </>
    // <div className="todoApp text-center">
    //   <h1>Todo App</h1>
    //   <input
    //     type="text"
    //     onChange={(e) => setList(e.target.value)}
    //     value={list}
    //     placeholder="Add todo"
    //   ></input>
    //   <button onClick={() => handleAdd()}>Click Me!</button>
    //   <div className="listItem">
    //     <ul>
    //       {listArr.map((val, index) => {
    //         return (
    //           <>
    //             <li key={`item-${index}`}>
    //                 {}
    //               {val} <button>edit</button>
    //               <button>Del</button>
    //             </li>
    //           </>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default TodoApp;
