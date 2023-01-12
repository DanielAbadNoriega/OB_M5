import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";
import "../../styles/tasks.scss";
import TasksForm from "../pure/forms/tasksForm";

const TaskList = () => {
  const defaultTask1 = new Task(
    "Example 1",
    "Description 1",
    LEVELS.NORMAL,
    true
  );
  const defaultTask2 = new Task(
    "Example 2",
    "Description 2",
    LEVELS.BLOCKING,
    false
  );
  const defaultTask3 = new Task(
    "Example 3",
    "Description 3",
    LEVELS.URGENT,
    false
  );

  /* Controlaremos ahora el estado */
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log(
      "UseEffect [ TaskListComponent ]: Task State has been modified."
    );
    return () => {
      console.log(
        "UseEffect return [ TaskListComponent ]: TaskList is going to unmount..."
      );
    };
  }, [tasks]);

  function completeTask(task) {
    console.log("Complete the Task: ", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
  }

  function removeTask(task) {
    console.log("Remove Task: ", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);
  }

  function addTask(task){
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  return (
    <div className="container">
      <div className="card">
        {/* header */}
        <div className="card-header">
          <h2 className="card-title text-dark"> Your Tasks: </h2>
        </div>
        {/* body */}
        <div className="card-body" data-mdb-perfect-scrollbar="true">
          <table className="table table-container">
            <thead className="table-light">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((task, index) => (
                <TaskComponent
                  key={index}
                  task={task}
                  complete={completeTask}
                  remove={removeTask}
                ></TaskComponent>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <TasksForm add={addTask}></TasksForm>
    </div>
  );
};

export default TaskList;
