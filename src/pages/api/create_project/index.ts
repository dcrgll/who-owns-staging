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
			.insert({ name: body.name })

		if (error) {
			res.status(500).json(error)
		} else {
			res.status(200).json({ message: 'Project created!' })
		}
	}
}
