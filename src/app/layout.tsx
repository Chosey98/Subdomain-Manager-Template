import type { Metadata } from 'next';
import './globals.css';

// export const metadata: Metadata = {
// 	title: ,
// 	description: 'Connect with us on social media',
// };
export const metadata: Metadata = {
	title: (() => {
		try {
			const envData = process.env.NEXT_PUBLIC_CLIENT_DATA;
			if (!envData) return 'Social Links';
			const clientData = JSON.parse(envData);
			return clientData.name;
		} catch (error) {
			console.error('Error parsing client data for metadata:', error);
			return 'Social Links';
		}
	})(),
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
