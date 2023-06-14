'use server';

import { IGalleryImage } from '@/assets/typescript/ui';
import { google } from 'googleapis';

export async function getPaintingsFromDB() {
  try {
    // Create a Target Array for the Google Sheets API
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/gm, '\n');

    // Create a JWT (JSON Web Token) for the Google Sheets API
    const jwt = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      scopes,
      key,
      keyId: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID,
    });

    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Main',
    });

    const rows = response.data.values;

    if (!rows?.length) return [];

    const transformedRows: IGalleryImage[] = rows.slice(1).map((row) => ({
      title: row[0],
      medium: row[1],
      dimensions: row[2],
      description: row[3],
      imageUrl: row[4] === '' ? '/static/images/Captivating.jpg' : row[4],
      original: {
        price: row[5],
        purchaseDate: row[6] || null,
        purchaseLocation: row[7] || null,
        purchaseBy: row[8] || null,
      },
      print: {
        isAvailable: Boolean(row[9]),
      },
      awards: row[10] || null,
      tags: row[11] || [],
      createdAt: row[12],
    }));

    return transformedRows;
  } catch (e) {
    console.error('e:', e);
    return [];
  }
}
