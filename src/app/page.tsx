'use client';

import React from 'react';

interface Link {
	title: string;
	url: string;
	icon: string;
	displayTitle?: string;
}

interface ClientData {
	name: string;
	logo: string;
	description?: string;
	links: Link[];
	customization?: {
		backgroundColor?: string;
		textColor?: string;
		buttonStyle?: string;
		font?: string;
		accentColor?: string;
	};
}

const defaultData: ClientData = {
	name: 'Test Data',
	logo: 'https://sandybrown-ant-159541.hostingersite.com/wp-content/uploads/2025/05/Dr.-Nahla-02.png',
	links: [],
};

export default function Page() {
	// Parse the client data from environment variable
	const clientData: ClientData = (() => {
		try {
			const envData = process.env.NEXT_PUBLIC_CLIENT_DATA;
			if (!envData) return defaultData;
			return JSON.parse(envData);
		} catch (error) {
			console.error('Error parsing client data:', error);
			return defaultData;
		}
	})();

	return (
		<div className="container">
			{/* LOGO */}
			<div className="logo">
				<img src={clientData.logo} alt={`${clientData.name} Logo`} />
			</div>

			{/* TITLE */}
			<h1>{clientData.name}</h1>

			{/* ICON LINKS ROW */}
			<div className="icons">
				{clientData.links
					.filter((link) => ['phone', 'envelope'].includes(link.icon))
					.map((link, index) => (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className={`fas fa-${link.icon}`}></i>
						</a>
					))}
			</div>

			{/* SOCIAL CARDS */}
			{clientData.links
				.filter((link) => !['phone', 'envelope'].includes(link.icon))
				.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="social-card"
					>
						<i className={`fab fa-${link.icon}`}></i>
						<span>{link.displayTitle || link.title}</span>
						<i className="fas fa-ellipsis-v dots"></i>
					</a>
				))}

			{/* CONTACT INFO */}
			{clientData.links
				.filter((link) => ['phone', 'envelope'].includes(link.icon))
				.map((link, index) => (
					<div key={index} className="social-card contact-info">
						<i className={`fas fa-${link.icon}`}></i>
						<span>
							<a href={link.url}>{link.title}</a>
						</span>
						<i className="fas fa-ellipsis-v dots"></i>
					</div>
				))}

			{/* FOOTER */}
			<div className="footer">©️ 2025 by Osiris Labs</div>
		</div>
	);
}
