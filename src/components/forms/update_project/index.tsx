'use client'

import PropTypes from 'prop-types'
import { getCookie } from 'utils/cookies'
export default function UpdateProjectForm({ setEmail }: { setEmail: any }) {
	return (
		<div className="px-4 py-4 sm:px-6">
			<h2 className="text-lg leading-6 font-bold text-gray-900">
				Update Project
			</h2>

			<p className="mt-2 text-xs text-gray-500" id="name-description">
				Enter your name, and then claim the project.
			</p>

			<div className="mt-4">
				<input
					type="text"
					name="name"
					id="name"
					className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
					placeholder="A. Developer"
					aria-describedby="name-description"
					defaultValue={getCookie('SB_WS_NAME')}
					onChange={e => setEmail(e.target.value)}
				/>
			</div>
		</div>
	)
}

UpdateProjectForm.propTypes = {
	setEmail: PropTypes.func.isRequired
}
