import type { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { iso } = req.query;

  if (!iso || typeof iso !== 'string') {
    return res.status(400).json({ error: 'ISO code is required' });
  }

  try {
    const filePath = join(process.cwd(), 'src', 'assets', `${iso.toLowerCase()}.svg`);
    const fileContent = readFileSync(filePath, 'utf-8');

    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return res.status(200).send(fileContent);
  } catch (error) {
    console.error(`Flag not found: ${iso}`, error);
    return res.status(404).json({ error: 'Flag not found' });
  }
}
