'use client'

import Project from 'components/project'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export default function ProjectsList(props: { email: string }) {
	const { data, error } = useSWR('/api/get_projects', fetcher)

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>

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
		<div className="bg-white shadow overflow-hidden sm:rounded-md w-full">
			<ul role="list" className="divide-y divide-gray-200">
				{data.map((project: any) => {
					return (
						<Project key={project.uuid} project={project} email={props.email} />
					)
				})}
			</ul>
		</div>
	)
}

ProjectsList.propTypes = {}
