'use client'

export default function Page(): JSX.Element {
	const onClick = () => {
		window.location.href = 'https://who-owns-staging.netlify.app/'
	}
	return (
		<div className="h-screen w-screen flex items-center justify-center flex-col px-8 sm:px-16 py-16">
			<h1>This is an old page</h1>
			<button
				onClick={onClick}
				className="bg-violet-400 hover:bg-violet-600 text-white font-bold py-2 px-8 rounded-full mt-2"
			>
				take me to the new page
			</button>
		</div>
	)
}
