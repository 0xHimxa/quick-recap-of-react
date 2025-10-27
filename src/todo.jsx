// import { useState } from "react";

// export const Todo_List = () => {
//   const [todo_input, setTodo_input] = useState("");
//   const [todo_store, setTodo_store] = useState([]);
//   const [editId, setEditId] = useState(null);
//   const [update_todo, setup_datatodo] = useState("");
//   const add_Todo = () => {
//     const new_Todo = [
//       ...todo_store,
//       {
//         id:
//           todo_store.length === 0
//             ? 1
//             : todo_store[todo_store.length - 1].id + 1,
//         task: todo_input,
//         completed: false,
//       },
//     ];

//     console.log(new_Todo);

//     setTodo_store(new_Todo);
//     setTodo_input('')
//   };

//   const delete_Todo = (id) => {
//     const filterd_Todo = todo_store.filter((task) => task.id !== id);
//     console.log(filterd_Todo);

//     setTodo_store(filterd_Todo);
//   };

//   //   const edit_todo = (todo_id) => {


//   // setTodo_store(updated_todo)

//   // setEdit((prev) => !prev)

//   //   };

//   const start_editing = (id, current_task) => {
//     setEditId(id);
//     setup_datatodo(current_task);
//   };


//   const save_Todo = (id)=>{


//   const updated_todo = todo_store.map((value)=>{

//     if(value.id === id){

//       return {...value,task: update_todo,}
//     }else{
//       return value
//     }

//   })

//  setTodo_store(updated_todo)

// setEditId(null)
// setup_datatodo('')
//   }



//   const cancel_edit = ()=>{

// setEditId(null)
// setup_datatodo('')

//   }

//   return (
//     <>
//       <h1>get</h1>

//       <input
//         type="text"
//         className="input_value"
//         placeholder="Enter todo here"
//         value={todo_input}
//         onChange={(e) => setTodo_input(e.target.value)}
//       />
//       <button onClick={add_Todo}> Add Todo</button>

//       <div>
//         {todo_store.map((value) =>
//           editId === value.id ? (
//             <><input
//               type="text"
//               value={update_todo}
//               onChange={(e) => setup_datatodo(e.target.value)}
//             />

//             <button onClick={()=> save_Todo(value.id)}>save</button> <button onClick={cancel_edit}>cancel</button>
// </>

//           ) : (
//             <>
//               {" "}
//               <h3>{value.task}</h3>
//               <button onClick={() => delete_Todo(value.id)}>delete</button>
//               <button onClick={()=> start_editing(value.id,value.task)}>Edit</button>
//             </>
//           )
//         )}
//       </div>
//     </>
//   );
// };


import { useState } from "react";
import "./TodoList.css"; // Import the CSS file

export const Todo_List = () => {
  const [todo_input, setTodo_input] = useState("");
  const [todo_store, setTodo_store] = useState([]);
  const [editId, setEditId] = useState(null);
  const [update_todo, setup_datatodo] = useState("");

  const add_Todo = () => {
    if (!todo_input.trim()) return;

    const new_Todo = [
      ...todo_store,
      {
        id: todo_store.length === 0 ? 1 : todo_store[todo_store.length - 1].id + 1,
        task: todo_input.trim(),
        completed: false,
      },
    ];

    setTodo_store(new_Todo);
    setTodo_input("");
  };

  const delete_Todo = (id) => {
    setTodo_store(todo_store.filter((task) => task.id !== id));
  };

  const start_editing = (id, current_task) => {
    setEditId(id);
    setup_datatodo(current_task);
  };

  const save_Todo = (id) => {
    if (!update_todo.trim()) return;

    const updated_todo = todo_store.map((value) =>
      value.id === id ? { ...value, task: update_todo.trim() } : value
    );

    setTodo_store(updated_todo);
    setEditId(null);
    setup_datatodo("");
  };

  const cancel_edit = () => {
    setEditId(null);
    setup_datatodo("");
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">My Todo List</h1>

      <div className="input-group">
        <input
          type="text"
          className="todo-input"
          placeholder="Enter a new todo..."
          value={todo_input}
          onChange={(e) => setTodo_input(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && add_Todo()}
        />
        <button className="add-btn" onClick={add_Todo}>
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {todo_store.map((value) => (
          <li key={value.id} className="todo-item">
            {editId === value.id ? (
              <div className="edit-mode">
                <input
                  type="text"
                  className="edit-input"
                  value={update_todo}
                  onChange={(e) => setup_datatodo(e.target.value)}
                  autoFocus
                />
                <div className="edit-actions">
                  <button className="save-btn" onClick={() => save_Todo(value.id)}>
                    Save
                  </button>
                  <button className="cancel-btn" onClick={cancel_edit}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="view-mode">
                <span className="todo-text">{value.task}</span>
                <div className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => start_editing(value.id, value.task)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => delete_Todo(value.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {todo_store.length === 0 && (
        <p className="empty-message">No todos yet. Add one above!</p>
      )}
    </div>
  );
};