import Button from '@mui/material/Button';
import { useState } from 'react';
import { useContext } from 'react';
import TasksContext from '../context/task';

function TaskCreate({  task, taskformUpdate, onUpdate  }) {
  const {  editTaskById, createTask } = useContext(TasksContext);
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
      //editTaskById(task.id,title,taskDesc)
    } else {
      //onCreate(title, taskDesc);
      createTask(title,taskDesc);
    }

    setTitle('');
    setTaskDesc('');
  };
  
    return (
      <div>
        {' '}
        {taskformUpdate ? (
          <div className='task-update'>
          <h2>Update Task</h2>
          <form className="task-form">
              <label className='task-label'>Update Title</label>
              <input value={title} onChange={handleChange} className='task-title-input' />
              <label className='task-label'>Update Task Details</label>
              <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={5} />
              <Button onClick={handleSubmit} className='task-button update-button' variant="contained" color="primary">
                  Update 
              </Button>
          </form>
      </div>
        ) : (
            <div className='task-create'>
            <h2>Task Create Panel</h2>
            <form className="task-form">
                <label className='task-label'>Enter Title</label>
                <input value={title} onChange={handleChange} className='task-title-input' />
                <label className='task-label'>Enter Task</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className='task-input' rows={5} />
                <Button onClick={handleSubmit} className='task-button' variant="contained" color="success">
                    Create
                </Button>
            </form>
        </div>
        )}
      </div>
    );
  }
  
  export default TaskCreate;