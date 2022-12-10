'use client'
import Forms from 'components/forms'
import ProjectsList from 'components/projects_list'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import fetcher from 'utils/fetcher'
import Spinner from 'components/spinner'
import SearchBar from 'components/search_bar'
import Footer from 'components/footer'
import Header from 'components/header'

export default function Page(): JSX.Element {
	const [email, setEmail] = useState('')
	const { data, error } = useSWR('/api/get_projects', fetcher)
	const [results, setResults] = useState([])

	useEffect(() => {
		setResults(data)
	}, [data])

	const handleSearch = (search: string) => {
		const filtered = data.filter((project: any) => {
			return project.name.toLowerCase().includes(search.toLowerCase())
		})

		setResults(filtered)
	}

	if (error) return <div>failed to load</div>
	if (!data) return <Spinner />

	return (
		<div className="h-screen w-screen flex  items-center flex-col px-8 sm:px-16 py-16">
			<Header />
			<Forms email={email} setEmail={setEmail} />
			<SearchBar handleSearch={handleSearch} />
			<ProjectsList email={email} projects={results} />
			<Footer />
			<Toaster
				position="top-right"
				reverseOrder={false}
				toastOptions={{
					duration: 5000
				}}
			/>
		</div>
	)
}
