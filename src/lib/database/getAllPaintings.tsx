'use server';

import { getPaintingsFromDB } from './db';

export async function getAllPaintings() {
  const allPaintings = await getPaintingsFromDB();

  return allPaintings;
}
