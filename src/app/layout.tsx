'use client'
import './styles.css'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<body className="dark:bg-gray-800">{children}</body>
		</html>
	)
}
