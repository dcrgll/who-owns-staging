import PropTypes from 'prop-types'
export default function Project({ project }: { project: any }) {
	return (
		<li>
			{project.name}

			<button>update</button>
		</li>
	)
}

Project.propTypes = {}
