'use client';

import React, { useEffect, useState } from 'react';
import {
	FaInstagram,
	FaMapMarkerAlt,
	FaUtensils,
	FaShoppingBag,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
	FaTiktok,
	FaShoppingCart,
	FaStore,
	FaCalendar,
	FaPhone,
	FaEnvelope,
	FaClock,
	FaInfoCircle,
	FaLink,
	FaGlobe,
} from 'react-icons/fa';

interface Link {
	title: string;
	url: string;
	icon?: string;
}

interface ClientData {
	name: string;
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

const getIconComponent = (iconName: string) => {
	const iconProps = { className: 'w-6 h-6' };

	switch (iconName.toLowerCase()) {
		case 'instagram':
			return <FaInstagram {...iconProps} />;
		case 'facebook':
			return <FaFacebook {...iconProps} />;
		case 'twitter':
			return <FaTwitter {...iconProps} />;
		case 'linkedin':
			return <FaLinkedin {...iconProps} />;
		case 'youtube':
			return <FaYoutube {...iconProps} />;
		case 'tiktok':
			return <FaTiktok {...iconProps} />;
		case 'map':
			return <FaMapMarkerAlt {...iconProps} />;
		case 'menu':
			return <FaUtensils {...iconProps} />;
		case 'shop':
			return <FaShoppingBag {...iconProps} />;
		case 'cart':
			return <FaShoppingCart {...iconProps} />;
		case 'store':
			return <FaStore {...iconProps} />;
		case 'calendar':
			return <FaCalendar {...iconProps} />;
		case 'phone':
			return <FaPhone {...iconProps} />;
		case 'email':
			return <FaEnvelope {...iconProps} />;
		case 'clock':
			return <FaClock {...iconProps} />;
		case 'info':
			return <FaInfoCircle {...iconProps} />;
		case 'website':
			return <FaGlobe {...iconProps} />;
		default:
			return <FaLink {...iconProps} />;
	}
};

export default function ClientPage() {
	// Try to get initial data from env variable
	const initialData = process.env.NEXT_PUBLIC_CLIENT_DATA
		? JSON.parse(process.env.NEXT_PUBLIC_CLIENT_DATA)
		: null;

	const [clientData, setClientData] = useState<ClientData | null>(
		initialData
	);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const fetchClientData = async () => {
			try {
				// Skip fetching if we already have data from env
				if (clientData) return;

				const response = await fetch('/api/client-data');
				if (!response.ok) {
					throw new Error('Failed to fetch client data');
				}
				const data = await response.json();
				setClientData(data);
			} catch (err) {
				setError('Failed to load client data');
				console.error('Error loading client data:', err);
			}
		};

		fetchClientData();
	}, [clientData]);

	if (error) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-red-50">
				<div className="text-red-600 text-center">
					<h1 className="text-2xl font-bold">Error</h1>
					<p>{error}</p>
				</div>
			</div>
		);
	}

	if (!clientData) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-400"></div>
			</div>
		);
	}

	const {
		name,
		description,
		links,
		customization = {
			backgroundColor: '#1a1a1a',
			textColor: '#ffffff',
			buttonStyle: 'glass',
			font: 'Inter',
			accentColor: '#E8B059',
		},
	} = clientData;

	return (
		<div
			className="min-h-screen flex flex-col"
			style={{
				backgroundColor: customization.backgroundColor,
				color: customization.textColor,
				fontFamily: customization.font,
			}}
		>
			{/* Header */}
			<header className="w-full bg-gradient-to-r from-amber-500/80 to-amber-600/80 py-4 px-6">
				<h1 className="text-4xl font-bold text-white text-center">
					{name}
				</h1>
				{description && (
					<p className="text-lg text-white/90 mt-2 text-center">
						{description}
					</p>
				)}
			</header>

			{/* Main content */}
			<main className="flex-grow bg-[#1a1a1a] p-4 flex items-center justify-center">
				<div className="w-full max-w-md mx-auto">
					<div className="flex flex-col gap-4">
						{links.map((link, index) => (
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-amber-500 hover:text-amber-400 transition-colors text-lg px-4 py-2"
							>
								{getIconComponent(link.icon || '')}
								{link.title}
							</a>
						))}
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="bg-[#1a1a1a] py-4 px-6 text-sm">
				<div className="flex items-center justify-center gap-1">
					© 2025{' '}
					<a
						href="https://theosirislabs.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-amber-500 hover:text-amber-400 transition-colors"
					>
						The Osiris Labs
					</a>
					. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
