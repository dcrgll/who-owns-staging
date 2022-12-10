import { useSWRConfig } from 'swr'
import { toast } from 'react-hot-toast'

export default function RemoveClaimProjectButton(props: {
	email: string
	project: any
}) {
	const { mutate } = useSWRConfig()

	const onClick = () => {
		fetch('/api/update_project', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				uuid: props.project.uuid,
				owner: ''
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
text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
				props.email ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-300'
			}`}
			disabled={!props.email}
			onClick={onClick}
		>
			Unclaim {props.project.name}
		</button>
	)
}

RemoveClaimProjectButton.propTypes = {}
