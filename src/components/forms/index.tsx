import PropTypes from 'prop-types'
import UpdateProjectForm from './update_project'
import CreateProjectForm from './create_project'
export default function Forms({ setEmail }: { setEmail: any }) {
	return (
		<div className="flex flex-row w-full justify-between">
			<UpdateProjectForm setEmail={setEmail} />
			<CreateProjectForm />
		</div>
	)
}

Forms.propTypes = {}
