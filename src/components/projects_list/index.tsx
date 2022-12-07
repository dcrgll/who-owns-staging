'use client'

import Project from 'components/project'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'

export default function ProjectsList() {
	const { data, error } = useSWR('/api/get_projects', fetcher)

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>

	return data.map((project: any) => {
		return <Project key={project.uuid} project={project} />
	})
}

ProjectsList.propTypes = {}
