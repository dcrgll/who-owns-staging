'use client'
import { useState } from 'react'
import { mutate } from 'swr'
import { toast } from 'react-hot-toast'

export default function CreateProjectForm(props: any) {
	const [projectName, setProjectName] = useState('')
	const [claimProject, setClaimProject] = useState(false)

	const onSubmit = () => {
		if (!projectName) return toast.error('Project name is required!')
		if (claimProject && !props.email)
			return toast.error('Enter your name over there to claim this project!')

		fetch('/api/create_project', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: projectName,
				owner: claimProject ? props : null
			})
		})
			.then(res => {
				if (res.status !== 200) return toast.error('Project already exists!')

				mutate('/api/get_projects')
				toast.success('Project updated!')
			})
			.catch(err => {
				toast.error('Project already exists!')
			})
	}

	return (
		<div className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#DCFCE7] via-[#FCA5A5] to-[#FECACA]">
			<div className="bg-white shadow overflow-hidden sm:rounded-md">
				<div className="px-4 py-4 sm:px-6">
					<h2 className="text-lg leading-6 font-bold text-gray-900">
						Create Project
					</h2>

					<p className="mt-2 text-xs text-gray-500" id="name-description">
						Enter a project name and then submit!
					</p>
					<div className="mt-4">
						<input
							type="text"
							name="name"
							id="name"
							className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
							placeholder="A Great Project"
							aria-describedby="name-description"
							onChange={e => setProjectName(e.target.value)}
						/>
					</div>

					<div className="relative flex items-start mt-4">
						<div className="flex items-center h-5">
							<input
								id="claim"
								aria-describedby="claim-description"
								name="claim"
								type="checkbox"
								className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
								onChange={e => setClaimProject(e.target.checked)}
							/>
						</div>
						<div className="ml-3 text-sm">
							<label htmlFor="claim" className="font-medium text-gray-700">
								Also claim this project
							</label>
							{/* <p id="claim-description" className="text-gray-500">
							Get notified when someones posts a comment on a posting.
						</p> */}
						</div>
					</div>
					<button
						type="button"
						className="mt-4 w-full justify-center inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm
					focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 bg-green-100 hover:bg-green-400 text-green-800"
						onClick={onSubmit}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	)
}
