'use client'
import { useForm } from 'react-hook-form'

export default function UpdateProjectForm({ setEmail }: { setEmail: any }) {
	return (
		<div>
			<h2
				className="
			text-lg leading-6 font-medium text-gray-900"
			>
				Update Project
			</h2>
			<label htmlFor="name" className="block text-sm font-medium text-gray-700">
				Name
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
					onChange={e => setEmail(e.target.value)}
				/>
			</div>
			<p className="mt-2 text-sm text-gray-500" id="name-description">
				Catchy subtitle.
			</p>
		</div>
	)
}

UpdateProjectForm.propTypes = {}
