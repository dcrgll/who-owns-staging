import PropTypes from 'prop-types'
import { CalendarIcon, UserIcon } from '@heroicons/react/24/solid'
import convertTimestamp from 'utils/convertTimestamp'
import ClaimProjectButton from 'components/claim_project_button'
import RemoveClaimProjectButton from 'components/remove_claim_project_button'

export default function Project(props: { project: any; email: string }) {
	const shouldRenderUser = (props: {
		project: { owner: string }
		email: string
	}) => {
		if (
			props.project.owner &&
			props.project.owner.toLowerCase() !== props.email?.toLowerCase()
		) {
			return true
		}
		return false
	}

	const isCurrentUserOwner = () => {
		return props.email.toLowerCase() === props.project?.owner?.toLowerCase()
	}
	const renderButton = (props: { project: any; email: string }) => {
		if (!props.email) return <ClaimProjectButton {...props} />
		if (isCurrentUserOwner()) {
			return <RemoveClaimProjectButton {...props} />
		}
		return <ClaimProjectButton {...props} />
	}

	return (
		<li key={props.project.id}>
			<div
				className={`px-4 py-4 sm:px-6 dark:bg-gray-800 dark:border-gray-00 ${
					isCurrentUserOwner() ? 'bg-gray-50' : ''
				}`}
			>
				<div className="flex items-center justify-between">
					<p className="text-sm font-medium text-indigo-600 dark:text-indigo-100 truncate">
						{props.project.name}
					</p>
					<div className="ml-2 flex-shrink-0 flex">
						<p
							className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
								!props.project.owner
									? 'bg-green-100 text-green-800'
									: 'bg-red-100 text-red-800'
							}`}
						>
							{props.project.owner ? 'Claimed' : 'Available'}
						</p>
					</div>
				</div>
				<div className="mt-2 sm:flex sm:justify-between">
					<div className="sm:flex">
						{shouldRenderUser(props) ? (
							<p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 dark:text-white">
								<UserIcon
									className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
								{props.project.owner}
							</p>
						) : (
							renderButton(props)
						)}
					</div>

					<div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 dark:text-white">
						<CalendarIcon
							className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
						<p>
							{props.project.owner ? 'Claimed since' : 'Available since'}
							{': '}
							<time dateTime={props.project.updated_at}>
								{convertTimestamp(props.project.updated_at)}
							</time>
						</p>
					</div>
				</div>
			</div>
		</li>
	)
}

Project.propTypes = {
	project: PropTypes.object.isRequired,
	email: PropTypes.string
}
