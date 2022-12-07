'use client'
import { useForm } from 'react-hook-form'

export default function UpdateProjectForm() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()
	const onSubmit = (data: any) => console.log(data)
	console.log(errors)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Name"
				{...register('Name', { required: true })}
			/>

			<input type="submit" />
		</form>
	)
}

UpdateProjectForm.propTypes = {}
