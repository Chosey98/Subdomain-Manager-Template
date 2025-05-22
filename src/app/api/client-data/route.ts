import { NextResponse } from 'next/server';
import testData from '../../../../test-data.json';

export async function GET() {
	try {
		// In development, use test data
		if (process.env.NODE_ENV === 'development') {
			return NextResponse.json(testData);
		}

		// In production, use data from environment variable
		const clientData = process.env.CLIENT_DATA;
		if (!clientData) {
			throw new Error('Client data not found');
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
