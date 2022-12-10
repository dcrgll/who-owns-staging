'use client'
import './styles.css'
import useAnalytics from 'utils/splitbee'

export default function Layout({ children }: { children: React.ReactNode }) {
	useAnalytics()
	return (
		<html lang="en">
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			></meta>
			<body className="dark:bg-gray-800">{children}</body>
		</html>
	)
}
