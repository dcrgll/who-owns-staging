'use client'

import Project from 'components/project'

export default function ProjectsList(props: { email: string; projects: any }) {
	return (
		<div className="bg-white shadow sm:rounded-b-md w-full">
			<ul role="list" className="divide-y divide-gray-200">
				{props.projects?.map((project: any) => {
					return (
						<Project key={project.uuid} project={project} email={props.email} />
					)
				})}
			</ul>
		</div>
	)
}

ProjectsList.propTypes = {}
