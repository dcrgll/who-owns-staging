'use client'
import { useState } from 'react'
import { mutate } from 'swr'
import { toast } from 'react-hot-toast'

export default function CreateProjectForm() {
	const [projectName, setProjectName] = useState('')

	const onSubmit = () => {
		if (!projectName) return toast.error('Project name is required!')

		fetch('/api/create_project', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: projectName
			})
		}).then(() => {
			mutate('/api/get_projects')
			toast.success('Project updated!')
		})
	}

	return (
		<div>
			<h2 className="text-lg leading-6 font-medium text-gray-900">
				Create Project
			</h2>
			<label htmlFor="name" className="block text-sm font-medium text-gray-700">
				Project Name
			</label>
			<div className="mt-1">
				<input
					type="name"
					name="name"
					id="name"
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500
					block w-full sm:text-sm border-gray-300 rounded-md"
					placeholder="you@example.com"
					aria-describedby="name-description"
					onChange={e => setProjectName(e.target.value)}
				/>
			</div>
			<button onClick={onSubmit}>Submit</button>
		</div>
	)
}

CreateProjectForm.propTypes = {}
