import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Dr. Nahla Moussa Center',
	description: 'Connect with us on social media',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
