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

// Icon mapping function to convert icon names to Font Awesome classes
const getIconClass = (
	iconName: string
): { className: string; prefix: string } => {
	const iconMap: Record<string, { className: string; prefix: string }> = {
		// Contact icons
		phone: { className: 'fa-phone', prefix: 'fas' },
		email: { className: 'fa-envelope', prefix: 'fas' },
		envelope: { className: 'fa-envelope', prefix: 'fas' }, // backward compatibility
		website: { className: 'fa-globe', prefix: 'fas' },
		map: { className: 'fa-map-marker-alt', prefix: 'fas' },

		// Social media icons
		instagram: { className: 'fa-instagram', prefix: 'fab' },
		facebook: { className: 'fa-facebook', prefix: 'fab' },
		twitter: { className: 'fa-twitter', prefix: 'fab' },
		linkedin: { className: 'fa-linkedin', prefix: 'fab' },
		youtube: { className: 'fa-youtube', prefix: 'fab' },
		tiktok: { className: 'fa-tiktok', prefix: 'fab' },

		// Business icons
		menu: { className: 'fa-utensils', prefix: 'fas' },
		shop: { className: 'fa-shopping-bag', prefix: 'fas' },
		cart: { className: 'fa-shopping-cart', prefix: 'fas' },
		store: { className: 'fa-store', prefix: 'fas' },
		calendar: { className: 'fa-calendar', prefix: 'fas' },
		clock: { className: 'fa-clock', prefix: 'fas' },
		info: { className: 'fa-info-circle', prefix: 'fas' },
		link: { className: 'fa-link', prefix: 'fas' },
	};

	return iconMap[iconName] || { className: 'fa-link', prefix: 'fas' };
};

// Check if icon should be displayed in the top icons row
const isContactIcon = (iconName: string): boolean => {
	return ['phone', 'email', 'envelope', 'website'].includes(iconName);
};

export default function Page() {
	// Check if custom HTML is provided (Base64 encoded)
	const customHTMLBase64 = process.env.NEXT_PUBLIC_CUSTOM_HTML_BASE64;

	// If custom HTML is provided, decode and render it directly
	if (customHTMLBase64) {
		try {
			// Decode the Base64 HTML
			const customHTML = Buffer.from(customHTMLBase64, 'base64').toString(
				'utf8'
			);
			return (
				<div
					dangerouslySetInnerHTML={{ __html: customHTML }}
					style={{ width: '100%', height: '100vh' }}
				/>
			);
		} catch (error) {
			console.error('Error decoding custom HTML:', error);
			// Fall back to template mode if decoding fails
		}
	}

	// Parse the client data from environment variable for template mode
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
					.filter((link) => isContactIcon(link.icon))
					.map((link, index) => {
						const iconClass = getIconClass(link.icon);
						return (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i
									className={`${iconClass.prefix} ${iconClass.className}`}
								></i>
							</a>
						);
					})}
			</div>

			{/* SOCIAL CARDS */}
			{clientData.links
				.filter((link) => !isContactIcon(link.icon))
				.map((link, index) => {
					const iconClass = getIconClass(link.icon);
					return (
						<a
							key={index}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="social-card"
						>
							<i
								className={`${iconClass.prefix} ${iconClass.className}`}
							></i>
							<span>{link.displayTitle || link.title}</span>
							<i className="fas fa-ellipsis-v dots"></i>
						</a>
					);
				})}

			{/* CONTACT INFO */}
			{clientData.links
				.filter((link) => isContactIcon(link.icon))
				.map((link, index) => {
					const iconClass = getIconClass(link.icon);
					return (
						<div key={index} className="social-card contact-info">
							<i
								className={`${iconClass.prefix} ${iconClass.className}`}
							></i>
							<span>
								<a href={link.url}>{link.title}</a>
							</span>
							<i className="fas fa-ellipsis-v dots"></i>
						</div>
					);
				})}

			{/* FOOTER */}
			<div className="footer">©️ 2025 by Osiris Labs</div>
		</div>
	);
}
