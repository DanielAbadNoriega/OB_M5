import React , { useRef} from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import "../../../styles/form.scss"

const TasksForm = ({add}) => {

  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addNewTask(e){
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      levelRef.current.value,
      false
    )
    add(newTask);
  }

  return (
    <form onSubmit={addNewTask} className="container-form">
    <h2 className='bg-light'>Create a new Task: </h2>
    <hr></hr>
      <div className='bg-light'>
        <input 
        id="inputName"
        type="text"
        placeholder='Enter the task name'
        ref={nameRef}
        required
        autoFocus
        ></input>
        <input 
        id="inputDescription"
        type="text"
        placeholder='Enter the task description'
        ref={descriptionRef}
        required
        ></input>
        <select
        id="selectLevel"
        ref={levelRef}
        required
        >
          <option value={LEVELS.NORMAL}>
            NORMAL
          </option>
          <option value={LEVELS.URGENT}>
            URGENT
          </option>
          <option value={LEVELS.BLOCKING}>
            BLOCKING
          </option>
        </select>
      </div>
      <button type='submit' className='btn btn-success mt-2'> Add </button>
    </form>
  );
}

export default TasksForm;
