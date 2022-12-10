'use client'
import Forms from 'components/forms'
import ProjectsList from 'components/projects_list'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'

export default function Page(): JSX.Element {
	const [email, setEmail] = useState('')

	return (
		<div className="h-screen w-screen flex  items-center flex-col px-8 sm:px-16 py-16">
			<h1 className="text-gray-800 text-center font-extrabold text-6xl">
				WHO OWNS STAGING
			</h1>
			<Forms setEmail={setEmail} />
			<ProjectsList email={email} />
			<Toaster position="bottom-left" reverseOrder={false} />
		</div>
	)
}
