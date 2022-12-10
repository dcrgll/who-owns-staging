'use client'

import Project from 'components/project'

export default function ProjectsList(props: { email: string; projects: any }) {
	// const positions = [
	// 	{
	// 		id: 1,
	// 		name: 'Accounts',
	// 		owner: 'Someone Else',
	// 		department: 'Engineering',
	// 		closeDate: '2020-01-07',
	// 		updated_at: '2022-12-07T22:22:24.428413'
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Web',
	// 		owner: '',
	// 		department: 'Engineering',
	// 		closeDate: '2020-01-07',
	// 		updated_at: '2022-12-07T22:22:24.428413'
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Connect-Web',
	// 		owner: 'Dan Cargill',
	// 		department: 'Design',
	// 		closeDate: '2020-01-14',
	// 		updated_at: '2022-12-07T22:22:24.428413'
	// 	}
	// ]

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
