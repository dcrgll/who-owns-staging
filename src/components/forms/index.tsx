import PropTypes from 'prop-types'
import UpdateProjectForm from './update_project'
import CreateProjectForm from './create_project'
export default function Forms(props: any) {
	return (
		<div className="flex flex-col space-y-6 md:space-y-0 md:flex-row w-full mt-8 justify-center">
			<UpdateProjectForm setEmail={props.setEmail} />
			<CreateProjectForm email={props.email} />
		</div>
	)
}

Forms.propTypes = {
	setEmail: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired
}
