import { NextApiRequest, NextApiResponse } from 'next'
import supabase from 'utils/supabase'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const body = req.body

		const { error } = await supabase
			.from('projects')
			.update({ owner: body.owner })
			.eq('uuid', body.uuid)

		if (error) {
			res.status(500).json(error)
		} else {
			res.status(200).json({ message: 'Project updated!' })
		}
	}
}
