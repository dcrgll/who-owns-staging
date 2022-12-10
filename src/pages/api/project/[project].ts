import { NextApiRequest, NextApiResponse } from 'next'
import supabase from 'utils/supabase'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const { data, error } = await supabase
			.from('projects')
			.select('name, owner')
			.eq('name', req.query.project)

		if (!error) {
			if (data[0].owner) res.status(200).json(data[0])
			else res.status(404).json({ error: 'Project is claimed on staging' })
		} else {
			res.status(500).json(error)
		}
	}
}
