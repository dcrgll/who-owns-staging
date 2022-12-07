import { NextApiRequest, NextApiResponse } from 'next'
import supabase from 'utils/supabase'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const { data, error } = await supabase.from('projects').select()

		if (!error) {
			res.status(200).json(data)
		} else {
			res.status(500).json(error)
		}
	}
}
