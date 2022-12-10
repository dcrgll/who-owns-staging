import { useSWRConfig } from 'swr'
import { toast } from 'react-hot-toast'
import { setCookie } from 'utils/cookies'

export default function ClaimProjectButton(props: {
	email: string
	project: any
}) {
	const { mutate } = useSWRConfig()

	const onClick = () => {
		if (!props.email) return toast.error('Name is required!')

		setCookie('SB_WS_NAME', props.email, 30)

		fetch('/api/update_project', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				uuid: props.project.uuid,
				owner: props.email
			})
		}).then(() => {
			mutate('/api/get_projects')
			toast.success('Project updated!')
		})
	}

	return (
		<button
			type="button"
			className={`inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm
text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${
				props.email
					? 'bg-green-100 hover:bg-green-400 text-green-800'
					: 'bg-gray-300'
			}`}
			disabled={!props.email}
			onClick={onClick}
		>
			Claim {props.project.name}
		</button>
	)
}

ClaimProjectButton.propTypes = {}
