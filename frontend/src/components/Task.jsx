import { FaCheckCircle, FaTrashAlt, FaEdit } from 'react-icons/fa';

const Task = () => {
	return (
		<div className='task'>
			<p>
				<b>1. </b>
				Task 1
			</p>
			<div className='task-icons'>
				<FaCheckCircle
					className='margin-right'
					color='green'
				/>
				<FaEdit color='purple' />
				<FaTrashAlt color='red' />
			</div>
		</div>
	);
};

export default Task;
