import UpdateProjectForm from 'components/forms/update_project'
import ProjectsList from 'components/projects_list'

export default function Page(): JSX.Element {
	return (
		<div className="h-screen w-screen flex justify-center items-center flex-col">
			<h1 className="text-gray-800 text-center font-extrabold text-2xl">
				WHO OWNS STAGING
			</h1>
			<ProjectsList />
		</div>
	)
}
