import { NextResponse } from 'next/server';

export async function GET() {
	try {
		const clientData = process.env.NEXT_PUBLIC_CLIENT_DATA;
		if (!clientData) {
			throw new Error('Client data not found in environment variables');
		}

		return NextResponse.json(JSON.parse(clientData));
	} catch (error) {
		console.error('Error loading client data:', error);
		return NextResponse.json(
			{ error: 'Failed to load client data' },
			{ status: 500 }
		);
	}
}
