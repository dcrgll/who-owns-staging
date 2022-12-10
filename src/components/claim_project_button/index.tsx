import { useSWRConfig } from 'swr'
import { toast } from 'react-hot-toast'

export default function ClaimProjectButton(props: {
	email: string
	project: any
}) {
	const { mutate } = useSWRConfig()

	const onClick = () => {
		if (!props.email) return toast.error('Name is required!')

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
				props.email ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-300'
			}`}
			disabled={!props.email}
			onClick={onClick}
		>
			Claim {props.project.name}
		</button>
	)
}

ClaimProjectButton.propTypes = {}
