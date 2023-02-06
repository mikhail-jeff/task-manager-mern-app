const TaskForm = ({ createTask, name, handleInputChange }) => {
	return (
		<form
			className='task-form'
			onSubmit={createTask}
		>
			<input
				type='text'
				name='name'
				value={name}
				placeholder='Add a task'
				onChange={handleInputChange}
			/>
			<button type='submit'>Add</button>
		</form>
	);
};

export default TaskForm;
