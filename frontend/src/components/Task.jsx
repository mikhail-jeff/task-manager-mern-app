import { set } from 'mongoose';
import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';

const Task = ({ task, index, deleteTask, getSingleTask, setToComplete }) => {
	return (
		<div className={task.completed ? 'task completed' : 'task'}>
			<p>
				<b>{index + 1}. </b>
				{task.name}
			</p>
			<div className='task-icons'>
				<FaCheckCircle
					className='margin-right'
					color='green'
					onClick={() => setToComplete(task)}
				/>
				<FaEdit
					color='purple'
					onClick={() => getSingleTask(task)}
				/>
				<FaTrashAlt
					color='red'
					onClick={() => deleteTask(task._id)}
				/>
			</div>
		</div>
	);
};

export default Task;
